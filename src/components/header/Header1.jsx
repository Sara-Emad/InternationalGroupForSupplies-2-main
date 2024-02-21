import { useContext } from "react";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./header.css";
import { useTranslation } from "react-i18next";

const Header1 = () => {
  const { t, i18n } = useTranslation();

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor:theme.palette.mode === "dark" ?  "#fbfbfb":  "#fbfbfb",
        py: "7px",
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#95d0a2",
              borderRadius: "12px",
              fontSize: "19px",
              fontWeight: "bold",
              color: "#0f2f57",
            }}
            variant="body2"
          >
            {t("signout")}
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "", color: "#0f2f57" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "" ,color: "#0f2f57"  }} />
              </IconButton>
            )}
          </div>

          <Grid>
            <IconButton
              sx={{ color:  "#0f2f57",  fontSize: "16px", }}
              onClick={() => i18n.changeLanguage("en")}
            >
              En
            </IconButton>
            <IconButton
              sx={{ color:  "#0f2f57",  fontSize: "16px", }}
              onClick={() => i18n.changeLanguage("fr")}
            >
              Fr
            </IconButton>
            <IconButton
              sx={{ color:  "#0f2f57",  fontSize: "16px" }}
              onClick={() => i18n.changeLanguage("ar")}
            >
              Ar
            </IconButton>
          </Grid>

          <IconButton>
            <TwitterIcon
              sx={{
                fontSize: "16px",
                color: "#0f2f57",
              }}
            />
          </IconButton>

          <IconButton>
            <FacebookIcon
              sx={{
                fontSize: "16px",

                color: "#0f2f57",
              }}
            />
          </IconButton>

          <IconButton>
            <InstagramIcon
              sx={{
                fontSize: "16px",
                color: "#0f2f57",
              }}
            />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
