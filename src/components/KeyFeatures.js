import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { School, Calculate, Search, Chat, Business } from "@mui/icons-material";
import { motion } from "framer-motion";

// Feature list with animated futuristic icons
const features = [
  { icon: <Calculate sx={{ fontSize: 50, color: "primary.main", filter: "drop-shadow(0px 0px 10px #1976d2)" }} />, title: "Cutoff Calculator", desc: "Find your Engineering & Medical cutoff instantly." },
  { icon: <Search sx={{ fontSize: 50, color: "primary.main", filter: "drop-shadow(0px 0px 10px #1976d2)" }} />, title: "College Finder", desc: "Discover the best colleges based on your cutoff." },
  { icon: <School sx={{ fontSize: 50, color: "primary.main", filter: "drop-shadow(0px 0px 10px #1976d2)" }} />, title: "Course Explorer", desc: "Explore 1000+ courses and career paths." },
  { icon: <Business sx={{ fontSize: 50, color: "primary.main", filter: "drop-shadow(0px 0px 10px #1976d2)" }} />, title: "Top Colleges", desc: "Get rankings and details of top colleges in TN." },
  { icon: <Chat sx={{ fontSize: 50, color: "primary.main", filter: "drop-shadow(0px 0px 10px #1976d2)" }} />, title: "AI Chatbot", desc: "Get instant answers to your admission queries." }
];

const KeyFeatures = () => {
  return (
    <Box sx={{ textAlign: "center", py: 6, px: 4 }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
           KEY FEATURES
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" mb={4}>
          Explore powerful tools to help you choose the right course and college!
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
                  borderRadius: 3,
                  backdropFilter: "blur(15px)", // Glassmorphism effect
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent card
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" }
                }}
              >
                <CardContent>
                  {feature.icon}
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyFeatures;
