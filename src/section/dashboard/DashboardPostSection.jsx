"use client";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import website from "public/image/websites.jpg";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function DashboardPostSection({ data }) {
  const [blogData, setBlogData] = useState(data);
  return (
    <Box sx={{ mt: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={8}>
            {blogData?.length <= 0 ? (
              <Typography variant="aboutTitle">
                There is no blog post
              </Typography>
            ) : (
              blogData.map((item) => {
                return (
                  <Box key={item?.id} sx={{ display: "block", mb: 2 }}>
                    <Grid container spacing={3} alignItems={"center"}>
                      <Grid item sm={4} xs={12}>
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: { md: 280, sm: 250, xs: 200 },
                            display: "block",
                          }}
                          component={Link}
                          href={`blog/${item?.id}`}
                        >
                          <Image
                            src={website}
                            fill={true}
                            alt="website image"
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={6.5} xs={12}>
                        <Box sx={{ position: "relative" }}>
                          <Box component={Link} href={`blog/${item?.id}`}>
                            {" "}
                            <Typography variant="aboutTitle">
                              {item?.title}
                            </Typography>{" "}
                          </Box>

                          <Typography variant="aboutPara" sx={{ mt: 1 }}>
                            {item?.body?.length > 100
                              ? `${item?.body.slice(0, 100)}...`
                              : item?.body}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid xs={1.5}>
                        <Tooltip title="Delete">
                          <IconButton>
                            <FaTimes />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })
            )}
            {/* <Grid container spacing={1.5}>
              <Grid item sm={4} xs={12}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { md: 280, sm: 250, xs: 200 },
                  }}
                >
                  <Image src={website} fill={true} alt="website image" />
                </Box>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

DashboardPostSection.defaultProps = {
  data: [],
};
export default DashboardPostSection;
