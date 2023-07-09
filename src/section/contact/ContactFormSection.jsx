"use client";
import { Container, Box, Grid, Typography, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import heroImage from "public/image/contact.png";
import ButtonComponent from "@/components/button/ButtonComponent";

function ContactFormSection() {
  return (
    <Box sx={{ mt: { md: 6, xs: 4 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="contactTitle"
          sx={{ mb: { md: 10, xs: 5 }, textAlign: "center" }}
        >
          Lets Keep in Touch
        </Typography>
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
            sx={{
              img: {
                maxHeight: { md: 600, xs: 300 },
              },
            }}
          >
            <Image src={heroImage} alt="Hero image" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box component="form">
              <Box sx={{ mb: 3 }}>
                <TextField placeholder="Enter name" />
              </Box>
              <Box sx={{ mb: 3 }}>
                <TextField placeholder="Enter Email" />
              </Box>
              <Box sx={{ mb: 3 }}>
                <TextField placeholder="Write Message" multiline minRows={3} />
              </Box>
              <ButtonComponent
                isLinkable={false}
                text={"Send"}
                type={"submit"}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactFormSection;
