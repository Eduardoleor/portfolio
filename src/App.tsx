import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import Development from "./pages/Development";
import Home from "./pages/Home";
import theme from "config/theme"
import { Box, CircularProgress } from "@mui/material";
import { layoutCenter } from "utils/design";
import { initializeAnalytics } from 'firebase/analytics';
import { firebaseApp } from "config/configFirebase";

function App() {

  useEffect(() => {
    process.env.NODE_ENV === 'production' && initializeAnalytics(firebaseApp);
  }, []);

  return (
    <Suspense
      fallback={
        <Box sx={layoutCenter}>
          <CircularProgress color="inherit" size={50} />
        </Box>
      }>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/development" element={<Development />} />
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
