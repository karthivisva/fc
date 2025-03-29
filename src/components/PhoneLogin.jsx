import { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/Auth.css";

const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const navigate = useNavigate();

  // ✅ Setup reCAPTCHA and Send OTP
  const sendOtp = async () => {
    if (!phone) {
      Swal.fire("Error", "Please enter a valid phone number", "error");
      return;
    }

    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });

      const confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
      setVerificationId(confirmation.verificationId);
      Swal.fire("OTP Sent!", "Check your phone for the OTP.", "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  // ✅ Verify OTP and Login
  const verifyOtp = async () => {
    if (!otp || !verificationId) {
      Swal.fire("Error", "Please enter the OTP", "error");
      return;
    }

    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      await auth.signInWithCredential(credential);

      Swal.fire("Login Successful!", "Welcome to Future Compass 🎉", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Error", "Invalid OTP", "error");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login with Phone Number</h2>
      
      <input
        type="tel"
        placeholder="Enter Phone Number (e.g. +91XXXXXXXXXX)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>

      {verificationId && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneLogin;
