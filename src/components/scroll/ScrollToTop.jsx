import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollToTop = () => {
  return (
    // ===================
    // hook for materialui called usescroll
    // ===================
    <Zoom in={ useScrollTrigger()}>
      {/* scroll action button */}
      <Fab
      onClick={() => {
        window.scrollTo(0,0)
      }}
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        size="medium"
        variant="extended"
        color="success"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
