import { Container, Typography, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        marginTop: "80px", 
        padding: "20px", 
        background: "#ffffff", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" 
      }}
    >
      <Box py={5}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ textAlign: "center", color: "#007bff" }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555", lineHeight: 1.6 }}>
          At <strong>Future Compass</strong>, we take your privacy seriously. This policy outlines how we collect, use, and protect your data.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          We may collect personal details such as your name, email, and phone number when you interact with our services.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          2. How We Use Your Data
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          Your data is used to improve our services, personalize recommendations, and communicate important updates.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          3. Data Security
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          We implement security measures to protect your data but cannot guarantee absolute security.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          4. Third-Party Links
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          Our website may contain links to third-party sites. We are not responsible for their privacy practices.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          5. Updates to This Policy
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          We may modify this Privacy Policy at any time. Check this page for updates.
        </Typography>

        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          If you have any concerns, email us at <strong>future.compass.official@gmail.com</strong>.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
