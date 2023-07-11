"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import website from "public/image/websites.jpg";

function BlogData({ data }) {
  console.log("🚀 ~ file: BlogData.jsx:9 ~ BlogData ~ data:", data);
  return (
    <Box sx={{ mt: 4 }}>
      <Container>
        {data.map((item) => {
          return (
            <Box
              component={Link}
              href={"/"}
              key={item?.id}
              sx={{ display: "block", mb: 2 }}
            >
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item sm={4} xs={12}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { md: 300, sm: 250, xs: 200 },
                    }}
                  >
                    <Image src={website} fill={true} alt="website image" />
                  </Box>
                </Grid>
                <Grid item sm={8} xs={12}>
                  <Box sx={{ position: "relative" }}>
                    <Typography variant="aboutTitle">{item?.title}</Typography>
                    <Typography variant="aboutPara" sx={{ mt: 1 }}>
                      {item?.body?.length > 100
                        ? `${item?.body.slice(0, 100)}...`
                        : item?.body}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
BlogData.defaultProps = {
  data: [],
};
export default BlogData;
