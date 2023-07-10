"use client";
import React from "react";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import { Box, Typography, Grid } from "@mui/material";
import ButtonComponent from "@/components/button/ButtonComponent.jsx";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

function CategoryPage({ params }) {
  const data = getData(params.category);
  return (
    <Box>
      <Typography
        variant={"heroPara"}
        fontWeight={600}
        textTransform={"capitalize"}
        sx={{ mb: 3 }}
      >
        {params.category}
      </Typography>
      <Box
        sx={{
          ".MuiGrid-container:nth-child(even)": {
            flexDirection: { sm: "row-reverse" },
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <Grid
              container
              columnSpacing={{ md: "70px", xs: "20px" }}
              rowSpacing={{ md: "20px", xs: "20px" }}
              alignItems={"center"}
              key={index}
              sx={{
                mb: 3,
              }}
            >
              <Grid
                item
                sm={6}
                xs={12}
                sx={{
                  img: {
                    maxHeight: { md: 600, xs: 300 },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { md: 500, sm: 400, xs: 300 },
                  }}
                >
                  <Box
                    component={Image}
                    src={item?.image}
                    alt={item?.title}
                    fill={true}
                  />
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box>
                  <Typography variant="contactTitle">{item?.title} </Typography>
                  <Typography variant="aboutPara" sx={{ mt: 4, mb: 2 }}>
                    {item?.desc}{" "}
                  </Typography>
                  <ButtonComponent
                    isLinkable={true}
                    path={"/"}
                    text={"See More"}
                  />
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
}

export default CategoryPage;
