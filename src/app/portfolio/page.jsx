"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import portfolioItem1 from "public/image/apps.jpg";
import portfolioItem2 from "public/image/illustration.png";
import portfolioItem3 from "public/image/websites.jpg";

function PortfolioPage() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item md={4} sm={2} xs={1}>
          <Box
            sx={{
              border: "5px solid #bbb",
              borderRadius: "5px",
              p: 1,
            }}
          >
            <Box
              component={Link}
              href={"/portfolio/illustrations"}
              sx={{
                width: "100%",
                height: { md: "400px", sm: "280px" },
                position: "relative",
                "&:hover p": {
                    color: "#53c28b",

                },
              }}
            >
              <Image
                src={portfolioItem2}
                alt="illustration image"
                fill={true}
              />
              <Typography
                variant="heroPara"
                sx={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                Illustrations
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} sm={2} xs={1}>
          <Box
            sx={{
              border: "5px solid #bbb",
              borderRadius: "5px",
              p: 1,
            }}
          >
            <Box
              component={Link}
              href={"/portfolio/website"}
              sx={{
                width: "100%",
                height: { md: "400px", sm: "280px" },
                position: "relative",
                "&:hover p": {
                    color: "#53c28b",

                },
              }}
            >
              <Image
                src={portfolioItem3}
                alt="illustration image"
                fill={true}
              />
              <Typography
                variant="heroPara"
                sx={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                Website
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} sm={2} xs={1}>
          <Box
            sx={{
              border: "5px solid #bbb",
              borderRadius: "5px",
              p: 1,
            }}
          >
            <Box
              component={Link}
              href={"/portfolio/application"}
              sx={{
                width: "100%",
                height: { md: "400px", sm: "280px" },
                position: "relative",
                "&:hover p": {
                    color: "#53c28b",

                },
              }}
            >
              <Image
                src={portfolioItem1}
                alt="illustration image"
                fill={true}
              />
              <Typography
                variant="heroPara"
                sx={{
                  position: "absolute",
                  right: "10px",
                  bottom: "10px",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                Application
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PortfolioPage;
