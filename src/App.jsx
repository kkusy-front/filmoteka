import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

//import components
import AppMenu from "./components/AppMenu";
import Footer from "./components/Footer";

//import PAGES
import Home from "./pages/home/index";
import About from "./pages/about/index";
import GetFilm from "./pages/GetFilm";
import Films from "./pages/films";

const App = () => {
  const [colorMode, setColorMode] = React.useState("dark");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
        },
      }),
    [colorMode]
  );

  // make wrapper function to give child
  const changeColorMode = React.useCallback(
    (val) => {
      setColorMode(val);
    },
    [setColorMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppMenu colorChangeSetter={changeColorMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="film/:id" element={<GetFilm />} />
          <Route path="films" element={<Films />} />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
