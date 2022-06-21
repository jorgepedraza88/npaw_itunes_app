// Components
import Search from "./Search";
// Pics
import background from "./../img/background_radio.jpg";
// MUI
import { Box } from "@mui/material";

const Hero = () => {
  return (
    <div id="hero">
      <Box
        component="div"
        sx={{
          minHeight: "90vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "fixed",
          backgroundPositionY: "center",
          backgroundPositionX: "left",
        }}
      >
        <Box
          component="div"
          sx={{
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 53, 85, 0.6)",
            margin: "0 auto",
            padding: "2rem",
          }}
        >
          <Search />
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
