import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCreateUserMutation } from "../store/usersApi";
import { CircularProgress } from "@mui/material";

const defaultTheme = createTheme();

const SignUp = () => {
  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  useEffect(() => {
    console.log('userData:', userData);
  }, [userData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch user data from form
    // const userData = { ...userData }; // Extract user data from form fields\



    try {
      await createUser(userData);
      setUserData({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
      })
      // console.log({ userData });
      // Handle successful creation
    } catch (error) {
      // Handle errors
      console.error('Error SigUp:', error.message);
    }
  };

  if (isError ?? isLoading) {
    return <CircularProgress size={24} />
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              value={userData.name}
              onChange={handleInputChange}
              autoFocus
            />

            <TextField
              margin="normal"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              id="phoneNumber"
              label="Phone Number (Optional)"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              autoComplete="phoneNumber"
            />
            <TextField
              margin="normal"
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={userData.password}
              onChange={handleInputChange}
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 1 }}
            >
              Sign Up
            </Button>

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
