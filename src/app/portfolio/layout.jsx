"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

function PortfolioLayout({ children }) {
  return (
    <Box sx={{ mt: { md: 6, xs: 3 } }}>
      <Container maxWidth={"lg"}>
        <Typography variant="portfolioTitle" sx={{ mb: { md: 6, xs: 3 } }}>
          Our Works
        </Typography>
        {children}
      </Container>
    </Box>
  );
}

export default PortfolioLayout;
