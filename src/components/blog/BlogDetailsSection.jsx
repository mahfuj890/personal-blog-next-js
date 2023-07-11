"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import website from "public/image/websites.jpg";

function BlogDetailsSection({ data }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Container>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { md: 400, sm: 300, xs: 250 },
          }}
        >
          <Image src={website} fill={true} alt="website image" />
        </Box>
        <Box sx={{ position: "relative", mt: 3 }}>
          <Typography variant="aboutTitle">{data?.title}</Typography>
          <Typography variant="aboutPara" sx={{ mt: 1 }}>
            {data?.body}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default BlogDetailsSection;
