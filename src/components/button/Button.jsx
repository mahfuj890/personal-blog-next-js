"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

function Button({ isLinkable, text, path, onClick }) {
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
  } else if (isLinkable === false) {
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
          },
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    );
  }
}
Button.defaultProps = {
  text: "Add button text",
};
export default Button;
