// PhoneAuth.jsx
import { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const sendOtp = async () => {
    if (!phone.match(/^\+\d{1,3}\d{9,}$/)) {
      alert("Enter a valid phone number with country code (e.g., +919876543210)");
      return;
    }

    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });

      const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      alert("OTP sent successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      alert("Phone number verified successfully!");
    } catch (error) {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register with Phone</h2>
      <input
        type="text"
        placeholder="Enter phone number (e.g., +919876543210)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>
      <div id="recaptcha-container"></div>

      {confirmationResult && (
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
    </div>
  );
};

export default PhoneAuth;
