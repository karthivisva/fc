import React, { useState, useEffect } from "react";
import { auth } from "../firebase"; // Ensure firebase.js is properly configured
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/");
    });
    return () => unsubscribe();
  }, [navigate]);

  // Email & Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({ icon: "success", title: "Login Successful!", timer: 2000, showConfirmButton: false });
      navigate("/");
    } catch (error) {
      Swal.fire({ icon: "error", title: "Login Failed!", text: error.message });
    }
    setLoading(false);
  };

  // Initialize reCAPTCHA
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => sendOtp(),
      });
    }
  };

  // Send OTP
  const sendOtp = async () => {
    if (!phoneNumber.startsWith("+91") || phoneNumber.length < 13) {
      Swal.fire({ icon: "error", title: "Invalid Phone Number", text: "Use format +91XXXXXXXXXX" });
      return;
    }
    setLoading(true);
    setupRecaptcha();
    try {
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
      window.confirmationResult = confirmation;
      setOtpSent(true);
      Swal.fire({ icon: "success", title: "OTP Sent!", text: "Check your phone for the OTP." });
    } catch (error) {
      Swal.fire({ icon: "error", title: "OTP Sending Failed", text: error.message });
    }
    setLoading(false);
  };

  // Verify OTP
  const verifyOtp = async () => {
    setLoading(true);
    try {
      await window.confirmationResult.confirm(otp);
      Swal.fire({ icon: "success", title: "Login Successful!", text: "Phone number verified." });
      navigate("/");
    } catch (error) {
      Swal.fire({ icon: "error", title: "OTP Verification Failed", text: error.message });
    }
    setLoading(false);
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire({ icon: "success", title: "Logged Out", timer: 2000, showConfirmButton: false });
      navigate("/login");
    } catch (error) {
      Swal.fire({ icon: "error", title: "Logout Failed", text: error.message });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login to Future Compass</h2>

        {/* Email & Password Login */}
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>Login</button>
        </form>

        <p>OR</p>

        {/* Phone Number Login */}
        {!otpSent ? (
          <>
            <input
              type="text"
              placeholder="+91XXXXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button onClick={sendOtp} disabled={loading}>Send OTP</button>
            <div id="recaptcha-container"></div>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button onClick={verifyOtp} disabled={loading}>Verify OTP</button>
          </>
        )}

        <p>Don't have an account? <Link to="/register">Register</Link></p>

        <button onClick={handleLogout} style={{ marginTop: "10px" }}>Logout</button>
      </div>
    </div>
  );
};

export default Login;
