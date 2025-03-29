import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import BubbleBackground from "./components/BubbleBackground";
import TermsOfService from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <Loading />;

  return (
    <Router>
      <BubbleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {user ? (
          <>
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
