import { SignIn } from "@clerk/clerk-react";
import "../styles/Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <SignIn path="/login" />
    </div>
  );
};

export default Login;
