import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Products from "./pages/Products/Products";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header1 />
                <Header2 />
                <Home />
                <Aboutus />
                <Products/>
                <Box
                  sx={{
                    bgcolor:
                      // @ts-ignore
                      theme.palette.bg.main,
                  }}
                ></Box>
                <Footer />
              </>
            }
          />
          <Route
            path="/Home"
            element={
              <>
                <Header1 />
                <Header2 />
                <Home />
                <Aboutus />
                <Products/>
              
                <Box
                  sx={{
                    bgcolor:
                      // @ts-ignore
                      theme.palette.bg.main,
                  }}
                ></Box>
                <Footer />
              </>
            }
          />

          <Route
            path="/Aboutus"
            element={
              <>
                <Header1 />
                <Header2 />
                <Aboutus />
                <Footer />
              </>
            }
          />

          <Route
            path="/Products"
            element={
              <>
                <Header1 />
                <Header2 />
                <Products/>
                <Footer />
              </>
            }
          />
        </Routes>

        <ScrollToTop/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
