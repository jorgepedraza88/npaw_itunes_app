import { Box, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Header = () => {
  return (
    <header className="header">
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        <PlayCircleIcon sx={{ fontSize: "5rem", marginTop: "10px" }} />
        <Typography variant="h3">
          npaw
          <Typography variant="h2" component="span" fontWeight="700">
            music
          </Typography>
        </Typography>
      </Box>
    </header>
  );
};

export default Header;
