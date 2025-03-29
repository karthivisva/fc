import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/img.1.jpg"; // Local image
import image2 from "../images/img.2.jpg"; // New local image
import image3 from "../images/img.3.jpg"; // New local image
import image4 from "../images/img.4.jpg"; // New local image

const CollegeAds = () => {
  const adImages = [
    image1, // Local image 1
    image2, // Local image 2
    image3, // Local image 3
    image4, // Local image 4
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "90%", maxWidth: "800px", margin: "auto", marginBottom: "20px" }}>
      <Slider {...settings}>
        {adImages.map((image, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={image}
              alt={`Ad ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                maxHeight: "400px",
                objectFit: "cover",
                marginTop: "40px"
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollegeAds;
