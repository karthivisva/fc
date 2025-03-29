import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/img.jpg"; // Import local image

const CollegeAds = () => {
  const adImages = [
    image1, // Local image
    "https://via.placeholder.com/800x400?text=College+Ad+1",
    "https://via.placeholder.com/800x400?text=College+Ad+2",
    "https://via.placeholder.com/800x400?text=College+Ad+3",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one image at a time
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
              style={{ width: "100%", height: "auto", borderRadius: "10px", maxHeight: "400px", objectFit: "cover" ,marginTop: "40px"}}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollegeAds;
