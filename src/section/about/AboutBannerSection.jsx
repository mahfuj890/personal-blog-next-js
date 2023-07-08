"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Container, Typography } from "@mui/material";

function AboutBannerSection() {
  return (
    <Box>
      <Box sx={{ width: "100%", height: "300px", position: "relative" }}>
        <Box
          component={Image}
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          sx={{ objectFit: "cover", filter: "grayscale(100%)" }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            backgroundColor: "#53c28b",
            padding: "5px",
            color: "white",
            padding: "20px 10px",
          }}
        >
          <Typography variant="aboutTitle" sx={{ color: "#ffffff" }}>
            Digital Storytellers
          </Typography>
          <Typography variant="aboutPara" sx={{ color: "#ffffff", mt: 1 }}>
            Handcrafting award winning digital experiences
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutBannerSection;
