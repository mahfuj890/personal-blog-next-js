"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function ButtonComponent({ isLinkable, text, path, onClick, type }) {
  if (isLinkable) {
    return (
      <Box
        sx={{
          padding: { md: "16px", xs: "10px" },
          cursor: "pointer",
          backgroundColor: "#53c28b",
          border: "none",
          borderRadius: "5px",
          width: "max-content",
          color: "white",
          "&:hover": {
            opacity: 0.8,
          },
        }}
        component={Link}
        href={path}
      >
        {text}
      </Box>
    );
  }
  if (!isLinkable) {
    return (
      <Button
        sx={{
          padding: { md: "16px", sm: "10px" },
          cursor: "pointer",
          backgroundColor: "#53c28b",
          border: "none",
          borderRadius: "5px",
          width: "max-content",
          color: "white",
          "&:hover": {
            opacity: 0.8,
            backgroundColor: "#53c28b",
          },
        }}
        onClick={onClick}
        type={type}
      >
        {text}
      </Button>
    );
  }
}
ButtonComponent.defaultProps = {
  text: "Add button text",
  type: "button",
};
export default ButtonComponent;
