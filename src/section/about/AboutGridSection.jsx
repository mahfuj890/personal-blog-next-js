"use client";
import Button from "@/components/button/Button";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function AboutGridSection() {
  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography variant="aboutTitle">Who Are We</Typography>
              <Typography variant="aboutPara" sx={{ mt: 3 }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quae dolor, optio voluptatibus magnam iure esse tempora beatae.
                A suscipit eos. Animi quibusdam cum omnis officiis voluptatum
                quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam
                iure esse tempora beatae, a suscipit eos. Animi quibusdam cum
                omnis officiis
              </Typography>
              <Typography variant="aboutPara" sx={{ mt: 3 }}>
                {" "}
                voluptatum quo ea eveniet? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus quae dolor, optio
                voluptatibus magnam iure esse tempora beatae, a suscipit eos.
                Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography variant="aboutTitle">What We Do?</Typography>
              <Typography variant="aboutPara" sx={{ mt: 3 }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quae dolor, optio voluptatibus magnam iure esse tempora beatae.
                A suscipit eos. Animi quibusdam cum omnis officiis voluptatum
                quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam
                iure esse tempora beatae, a suscipit eos. Animi quibusdam cum
                omnis officiis
              </Typography>
              <Typography variant="aboutPara" sx={{ mt: 3 }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quae dolor, optio voluptatibus magnam iure esse tempora beatae,
                a suscipit eos. Animi quibusdam cum omnis officiis voluptatum
                quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. -
                <br />
                <br /> - Dynamic Websites
                <br />
                <br /> - Fast and Handy
                <br />
                <br /> - Mobile Apps
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button isLinkable={true} path={"/contact"} text={"Contact"} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutGridSection;
