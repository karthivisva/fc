
import { Container, Grid, Typography, IconButton, Box, Link, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Facebook, Instagram, LinkedIn, Email, Phone, LocationOn, Business } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ background: "#2C3E50", color: "white", py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} textAlign="center">
          {/* Company Info */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Future Compass 🚀
            </Typography>
            <Typography variant="body2">
              Your ultimate guide to finding the <strong>right course & college</strong> in Tamil Nadu.
            </Typography>
            <Box mt={1}>
              <Typography variant="caption" fontStyle="italic">
                "Empowering students for a better future!"
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
            <Box display="flex" flexDirection="column" gap={1} mt={1}>
              <Link href="/courses" color="#F1C40F" underline="hover" variant="body2">
                Find Courses
              </Link>
              <Link href="/contact" color="#F1C40F" underline="hover" variant="body2">
               Top Colleges
              </Link>
              <Link href="/about" color="#F1C40F" underline="hover" variant="body2">
                 Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Support & Contact */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">Support</Typography>
            <Box display="flex" flexDirection="column" gap={1} mt={1}>
              <Typography variant="body2" display="flex" alignItems="center" gap={1}>
                <Email fontSize="small" /> future.compass.official@gmail.com
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center" gap={1}>
                <Phone fontSize="small" /> +91 9952601489
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center" gap={1}>
                <LocationOn fontSize="small" /> Salem, Tamil Nadu
              </Typography>
            </Box>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">Follow Us</Typography>
            <Box display="flex" justifyContent="center" gap={1} mt={1}>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <IconButton href="https://www.facebook.com/share/1RSo1kTisv/" target="_blank" color="inherit">
                  <Facebook />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <IconButton href="https://www.instagram.com/future__compass?igsh=cG1mdDFqazYzMW1j" target="_blank" color="inherit">
                  <Instagram />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <IconButton href="https://www.linkedin.com/in/future-compass-9aaaa7358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" color="inherit">
                  <LinkedIn />
                </IconButton>
              </motion.div>
            </Box>
          </Grid>
        </Grid>

        {/* Divider Line */}
        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", my: 3 }} />

        {/* Copyright & Legal Links */}
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Future Compass. All Rights Reserved. 
          <Link href="/terms" color="inherit" underline="hover" sx={{ ml: 2 }}>
            Terms of Service
          </Link> | 
          <Link href="/privacy" color="inherit" underline="hover" sx={{ ml: 2 }}>
            Privacy Policy
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
