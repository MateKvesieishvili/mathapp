import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AddCard, Home } from "./pages";
import { CardDetails } from "./components";
import {createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#673ab7", 
    },
    secondary: {
      main: "#9575cd", 
    },
    background: {
      default: "#171717",
      paper: "#171717",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddCard />} />
          <Route path="/details/:id" element={<CardDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App
