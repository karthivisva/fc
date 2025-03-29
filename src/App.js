import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import BubbleBackground from "./components/BubbleBackground";
import TermsOfService from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";

const clerkPubKey = "pk_test_Y2FzdWFsLWluc2VjdC0xMC5jbGVyay5hY2NvdW50cy5kZXYk"; // Replace with your actual key

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <BubbleBackground />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ Protected Routes (Fix) */}
          <Route
            path="/courses"
            element={
              <SignedIn>
                <Courses />
              </SignedIn>
            }
          />
          <Route
            path="/about"
            element={
              <SignedIn>
                <About />
              </SignedIn>
            }
          />
          <Route
            path="/contact"
            element={
              <SignedIn>
                <Contact />
              </SignedIn>
            }
          />

          {/* 🔴 If user is signed out, redirect to login */}
          <Route
            path="*"
            element={
              <SignedOut>
                <Navigate to="/login" />
              </SignedOut>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </ClerkProvider>
  );
};

export default App;
