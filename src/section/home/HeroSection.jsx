import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import heroImage from "public/image/hero.png";
import Button from "@/components/button/Button";

function HeroSection() {
  return (
    <Box>
      <Container maxWidth={"lg"}>
        <Grid
          container
          columnSpacing={{ md: "70px", xs: "20px" }}
          rowSpacing={{ md: "20px", xs: "20px" }}
          alignItems={"center"}
        >
          <Grid
            item
            sm={6}
            xs={12}
            order={{md:2,xs:1}}
            sx={{
              img: {
                maxHeight: { md: 600, xs: 300 },
              },
            }}
          >
            <Image src={heroImage} alt="Hero image" />
          </Grid>
          <Grid item sm={6} xs={12} >
            <Box>
              <Typography variant={"heroTitle"}>
                Better design for your digital products.
              </Typography>
              <Typography variant={"heroPara"} sx={{ mt: 3, mb: 4 }}>
                Turning your Idea into Reality. We bring together the teams from
                the global tech industry
              </Typography>
              <Button isLinkable path="/portfolio" text={"See Our Works"} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
