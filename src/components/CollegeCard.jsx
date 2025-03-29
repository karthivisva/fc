import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Grid, TextField, Box } from "@mui/material";
import { motion } from "framer-motion";
import colleges from "../data/colleges";
import CollegeAds from "../components/CollegeAds";

// Custom Styles
const styles = {
  title: { fontFamily: "'Poppins', sans-serif", fontWeight: "bold" },
  subtitle: { fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#757575" },
  description: { fontFamily: "'Inter', sans-serif", fontSize: "14px" },
  button: { textTransform: "none", fontWeight: "bold", fontSize: "14px" },
};

// Motion Variants for Animations
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 } // No more glowing effect
};

const CollegeCard = ({ title, subtitle, description, link1, link2 }) => (
  <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover" transition={{ duration: 0.3 }}>
    <Card
      sx={{
        maxWidth: 350,
        borderRadius: 3,
        padding: 3,
        margin: "20px",
        background: "rgba(255, 255, 255, 0.15)", // Glassmorphism effect
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        transition: "0.3s",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
        "&:hover": { 
          transform: "scale(1.03)", 
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" // No cyan glow
        }
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={styles.title} color="primary">
          {title}
        </Typography>
        <Typography sx={styles.subtitle} gutterBottom>
          {subtitle}
        </Typography>
        <Typography variant="body2" sx={styles.description} color="textSecondary">
          {description || "No description available."}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="center" gap={2} p={2}>
        {link1 && (
          <Button variant="contained" color="primary" href={link1} target="_blank" sx={styles.button}>
            Visit Website
          </Button>
        )}
        {link2 && (
          <Button variant="outlined" color="primary" href={link2} target="_blank" sx={styles.button}>
            More Info
          </Button>
        )}
      </Box>
    </Card>
  </motion.div>
);

const CollegeList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredColleges = colleges.filter(college =>
    college.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ textAlign: "center", py: 6, mt: 5 }}>
      {/* College Ads Section */}
      <CollegeAds />

      {/* Search Input with Animation */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <TextField
          label="Search Colleges"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            mb: 4,
            paddingTop: 5,
            width: "60%",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
            "& input": { color: "black" },
            "& label": { color: "#00bcd4" },
            "& fieldset": { borderColor: "#00bcd4" }
          }}
        />
      </motion.div>

      {/* College Cards Grid */}
      <Grid container spacing={4} justifyContent="center">
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CollegeCard {...college} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary" sx={styles.title}>
            No colleges found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default CollegeList;
