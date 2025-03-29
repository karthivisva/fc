import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import ListAltIcon from "@mui/icons-material/ListAlt";
import CalculateIcon from "@mui/icons-material/Calculate";
import PeopleIcon from "@mui/icons-material/People";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  const text = "ABOUT US";
  const speed = 100;
  const delay = 1000;
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (index <= text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.slice(0, index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setIndex(0), delay);
    }
  }, [index, text]);

  return (
    <Container maxWidth="lg" sx={{ py: 5, textAlign: "center", marginTop: 10 }}>
      {/* Typewriter Animated Header */}
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "black", // Set text color to white
            display: "inline-block",
            overflow: "hidden",
            maxWidth: "100%",
            wordBreak: "break-word",
            textAlign: "center",
            paddingRight: isSmallScreen ? 0 : 8,
          }}
        >
          {typedText}
        </Typography>
      </motion.div>

      {/* Introduction */}
      <Typography variant="body1" sx={{ color: "black" }} paragraph>
        <strong>Future Compass</strong> is an advanced <strong>AI-powered platform</strong> designed to help 
        students in Tamil Nadu navigate the complex journey of **choosing the right course and college** after 
        12th grade. We leverage data-driven insights and real-time analytics to ensure that every student 
        **makes the best academic decision** based on their **cutoff, interests, and future goals**.
      </Typography>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {[
          {
            title: "AI-Powered Course Suggestions",
            desc: "Get personalized course recommendations based on your academic profile and career aspirations.",
            icon: <ListAltIcon fontSize="large" sx={{ color: "white" }} />,
          },
          {
            title: "Verified College Insights",
            desc: "Explore top-ranked colleges with real-time cutoff data, infrastructure details, and student reviews.",
            icon: <SchoolIcon fontSize="large" sx={{ color: "white" }} />,
          },
          {
            title: "Engineering & Medical Cutoff Calculator",
            desc: "Accurately calculate your cutoff marks to find the best colleges suited for you.",
            icon: <CalculateIcon fontSize="large" sx={{ color: "white" }} />,
          },
          {
            title: "Reservation-Based College Filtering",
            desc: "Get college recommendations based on quota, category, and special reservations for optimized admissions.",
            icon: <PeopleIcon fontSize="large" sx={{ color: "white" }} />,
          },
          {
            title: "Latest Admission & Scholarship Updates",
            desc: "Stay updated with exclusive scholarships, admission deadlines, and application strategies.",
            icon: <CampaignIcon fontSize="large" sx={{ color: "white" }} />,
          },
          {
            title: "Career Trends & Future Scope",
            desc: "Access real-time career trend analysis to make informed decisions about your future job market.",
            icon: <TrendingUpIcon fontSize="large" sx={{ color: "white" }} />,
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  p: 3,
                  borderRadius: 4,
                  boxShadow: 4,
                  background: "#4881C4",
                  color: "white",
                  "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  {item.icon}
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 1, color: "white" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>{item.desc}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Vision & Mission Section */}
      <Box
        sx={{
          mt: 6,
          textAlign: "center",
          p: 4,
          bgcolor: "#34495E",
          borderRadius: 4,
          color: "white",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "white" }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          To become the <strong>#1 trusted education platform</strong> for Tamil Nadu students by offering 
          **smart, data-driven course and college recommendations**, ensuring every student gets the best academic 
          opportunity.
        </Typography>

        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mt: 4, color: "white" }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          We aim to <strong>empower students</strong> by providing:
        </Typography>
        <ul style={{ textAlign: "left", display: "inline-block", margin: "0 auto", color: "white" }}>
          <li><Typography variant="body1" sx={{ color: "white" }}>AI-based personalized course & college recommendations.</Typography></li>
          <li><Typography variant="body1" sx={{ color: "white" }}>Real-time **cutoff predictions** for better decision-making.</Typography></li>
          <li><Typography variant="body1" sx={{ color: "white" }}>100% verified **college listings** with in-depth insights.</Typography></li>
          <li><Typography variant="body1" sx={{ color: "white" }}>Exclusive **scholarships and admission** updates.</Typography></li>
        </ul>
      </Box>
    </Container>
  );
};

export default About;
