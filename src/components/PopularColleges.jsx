import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  GlobalStyles,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { keyframes } from "@mui/system";

// Import images
import image1 from "../images/img.1.jpg";
import image2 from "../images/img.2.jpg";
import image3 from "../images/img.3.jpg";
import image4 from "../images/img.4.jpg";

// College data
const popularColleges = [
  {
    name: "Indian Institute of Technology Madras",
    course: "B.Tech in Computer Science",
    image: image1,
    link: "https://www.iitm.ac.in/",
  },
  {
    name: "Anna University",
    course: "B.E in Electrical Engineering",
    image: image2,
    link: "https://www.annauniv.edu/",
  },
  {
    name: "PSG College of Technology",
    course: "B.Tech in Information Technology",
    image: image3,
    link: "https://www.psgtech.edu/",
  },
  {
    name: "SRM Institute of Science and Technology",
    course: "B.Tech in Mechanical Engineering",
    image: image4,
    link: "https://www.srmist.edu.in/",
  },
];

// Floating heading animation
const floatingText = keyframes`
  0% { transform: translateY(0px); opacity: 1; }
  50% { transform: translateY(-8px); opacity: 0.8; }
  100% { transform: translateY(0px); opacity: 1; }
`;

const PopularColleges = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerMode: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  return (
    <>
      {/* 👇 GlobalStyles to make arrow color black */}
      <GlobalStyles
        styles={{
          ".slick-prev:before, .slick-next:before": {
            color: "black",
            fontSize: "20px",
          },
        }}
      />

      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          margin: "auto",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: { xs: "22px", md: "32px" },
            background: "linear-gradient(135deg, #ff5722, #ff9800)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0px 3px 8px rgba(0,0,0,0.2)",
            letterSpacing: "1px",
            marginTop: "-80px",
            mb: 3,
            animation: `${floatingText} 2.5s infinite ease-in-out`,
          }}
        >
          🎓 POPULAR COLLEGES & COURSES
        </Typography>

        <Box sx={{ width: "90%", maxWidth: "900px" }}>
          <Slider {...settings}>
            {popularColleges.map((college, index) => (
              <Card
                key={index}
                sx={{
                  width: "100%",
                  margin: "auto",
                  borderRadius: 3,
                  boxShadow: 3,
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={college.image}
                  alt={college.name}
                  sx={{
                    width: "100%",
                    height: { xs: "350px", sm: "400px", md: "300px" },
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />

                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {college.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {college.course}
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    href={college.link}
                    target="_blank"
                    sx={{
                      mt: 2,
                      borderRadius: "20px",
                      fontWeight: "bold",
                      background: "linear-gradient(135deg, #007bff, #00c6ff)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #0056b3, #00a6ff)",
                      },
                    }}
                    endIcon={<OpenInNewIcon />}
                  >
                    Visit College
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default PopularColleges;
