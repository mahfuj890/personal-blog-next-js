import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

function Button({ isLinkable, text, path, onClick }) {
  return (
    <Box
      sx={{
        padding: "20px",
        cursor: "pointer",
        backgroundColor: "#53c28b",
        border: "none",
        borderRadius: "5px",
        width: "max-content",
        color: "white",
      }}
      component={Link}
    >
      Button
    </Box>
  );
}

export default Button;
