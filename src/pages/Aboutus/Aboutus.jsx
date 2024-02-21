import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import {green } from "@mui/material/colors";
// import { deepOrange } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Aboutus = () => {
  const theme = useTheme();
  return (
    <Container sx={{my:"150px"}}>
      <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item md={8} >
            <Item>
              <Stack
                direction={"row"}
                sx={{ display: "block", textAlign: "left" }}
              >
                <Typography
                  sx={{
                    width: "120px",
                    height: "1px",
                    display: "inline-block",
                    backgroundColor: "#f38b74",
                  }}
                ></Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "36px",
                    fontWeight: 700,
                  }}
                >
                  ABOUT US
                </Typography>
                <Typography></Typography>
              </Stack>

              <Stack
                marginTop={5}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                sx={{ textAlign: "left" }}
              >
                <Item sx={{ all: "unset" }}>
                  <Typography sx={{ textAlign: "left" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Item>
                <Item sx={{ all: "unset" }}>
                  <Typography sx={{ textAlign: "left" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Item>
                <Item
                  sx={{
                    all: "unset",
                    textAlign: "left",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <DoneAllOutlinedIcon sx={{ color: "#f38b74" }} />
                  <Typography>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </Typography>
                </Item>
                <Item
                  sx={{
                    all: "unset",
                    textAlign: "left",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <DoneAllOutlinedIcon sx={{ color: "#f38b74" }} />
                  <Typography>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </Typography>
                </Item>
                <Item
                  sx={{
                    all: "unset",
                    textAlign: "left",
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <DoneAllOutlinedIcon sx={{ color: "#f38b74" }} />
                  <Typography>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </Typography>
                </Item>
              </Stack>
            </Item>
          </Grid>

          <Grid item md={8}  >
            <Item>
              <Stack
                sx={{
                  all: "unset",
                  textAlign: "left",
                  gap: 1,
                  py: 3,
                }}
              >
                <Typography sx={{ marginTop: "80px" }}>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Typography>
                <Typography sx={{ marginTop: "20px" }}>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Typography>
                <Typography sx={{ marginTop: "20px" }}>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Typography>

                <Button
                className="aboutbutton"
                
                  sx={{
                    marginTop: "35px",
                  
                      
                      bgcolor:
                        theme.palette.mode === "dark" ? green[200] : green[200],
                      boxShadow: "0px 4px 16px rgba(43, 52 ,69 , 0.1)",
                      color:   theme.palette.mode === "dark" ? " #fff" :" #fff" ,
                    
                      "&:hover": {
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "#fff" 
                            : "#fff" ,
                        boxShadow: "0px 4px 16px rgba(43, 52 ,69 , 0.1)",
                        color:   theme.palette.mode === "dark" ?  green[200] : green[200],
                        border:"2px solid #4caf50",
                      },
                  
                  }}
                >
                  Contact with us
                </Button>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Aboutus;
