import { SignUp } from "@clerk/clerk-react";
import "../styles/Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <SignUp path="/register" />
    </div>
  );
};

export default Register;
