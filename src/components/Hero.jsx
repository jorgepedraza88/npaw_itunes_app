import background from "./../img/background_radio.jpg";
import { Box } from "@mui/material";
import Search from "./Search";

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
            backgroundColor: "rgba(0,53,85,0.6)",
            margin: "0 auto",
            padding: "2rem",
          }}
          md={{
            width: "100vw",
          }}
        >
          <Search />
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
