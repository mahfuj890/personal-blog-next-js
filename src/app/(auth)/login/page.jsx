"use client";
import ButtonComponent from "@/components/button/ButtonComponent";
import { Box, Container, Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";

function LoginPage() {

  //Login form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // toast.success("Successfully Login");
    // localStorage.setItem("isUserLogin","true")
  };

  useEffect(() => {
    toast.info("Enter any email and password to login");
  }, []);

  return (
    <Box
      sx={{
        mt: 3,
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent={"center"}>
          <Grid item md={4} sm={6} xs={12} sx={{ order: { md: 2, xs: 1 } }}>
            <Box component="form" sx={{ mt: 2 }} onSubmit={handleFormSubmit}>
              <Box sx={{ mb: 3 }}>
                <TextField placeholder="Enter Email" type="email" />
              </Box>
              <Box sx={{ mb: 3 }}>
                <TextField placeholder="Enter Password" type="password" />
              </Box>

              <Box
                sx={{
                  button: {
                    width: 1,
                  },
                }}
              >
                <ButtonComponent
                  isLinkable={false}
                  text={"Login"}
                  type={"submit"}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LoginPage;
