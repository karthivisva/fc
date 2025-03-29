import { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

// Sample College Data (Replace with API data if needed)
const collegeList = [
  { name: "Anna University", location: "Chennai", deadline: "April 30, 2025", link: "/apply/anna" },
  { name: "IIT Madras", location: "Chennai", deadline: "May 15, 2025", link: "/apply/iit-madras" },
  { name: "PSG College of Technology", location: "Coimbatore", deadline: "April 25, 2025", link: "/apply/psg" },
  { name: "SRM University", location: "Kattankulathur", deadline: "May 10, 2025", link: "/apply/srm" },
];

const AdmissionOpen = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Fetch data if using an API (for now, we use sample data)
    setColleges(collegeList);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
      {/* Section Title */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          🏛️ Admission Open in Private Colleges
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore the top colleges currently accepting admissions. Don't miss your chance!
        </Typography>
      </motion.div>

      {/* Colleges Grid */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {colleges.map((college, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card sx={{ boxShadow: 4, borderRadius: 4, background: "#fff" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="bold" color="secondary">
                    {college.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 {college.location}
                  </Typography>
                  <Typography variant="body2" color="error" sx={{ fontWeight: "bold", mt: 1 }}>
                    📅 Deadline: {college.deadline}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" color="primary" href={college.link}>
                      Apply Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdmissionOpen;
