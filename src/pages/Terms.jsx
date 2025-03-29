import { Container, Typography, Box } from "@mui/material";

const TermsOfService = () => {
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
          Terms of Service
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555", lineHeight: 1.6 }}>
          Welcome to <strong>Future Compass</strong>! These Terms of Service govern your use of our website. By accessing or using our platform, you agree to these terms.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          1. Use of Our Services
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          Future Compass provides information about courses, colleges, and cutoffs in Tamil Nadu. The content is for informational purposes only, and we do not guarantee accuracy.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          2. User Responsibilities
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          You agree not to misuse our services, engage in fraudulent activities, or violate any laws while using our website.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          3. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          All content, including text, images, and code, is the property of Future Compass. Unauthorized use or reproduction is prohibited.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          4. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          Future Compass is not responsible for any decisions made based on the information provided on this site.
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ color: "#333", marginTop: "20px" }}>
          5. Changes to Terms
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          We may update these Terms from time to time. Continued use of the website means acceptance of the revised terms.
        </Typography>

        <Typography variant="body1" paragraph sx={{ color: "#555" }}>
          If you have any questions, contact us at <strong>future.compass.official@gmail.com</strong>.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService;
