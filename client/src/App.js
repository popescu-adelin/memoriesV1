import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";
const App = () => {
  const theme = createTheme();
  return (
    <GoogleOAuthProvider clientId="424744602306-ce3dshb7bontddf022pkst5r6ed6omv3.apps.googleusercontent.com">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container maxWidth="lg">
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/auth" exact element={<Auth />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};
export default App;
