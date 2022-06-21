// MUI
import { Box, Typography, Link } from "@mui/material";
// Icons
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <header className="header">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <PlayCircleIcon
          sx={{
            fontSize: {
              xs: "3.5rem",
              md: "4rem",
            },
            marginTop: "10px",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "3rem",
              md: "3.8rem",
            },
            fontWeight: "500",
          }}
        >
          npaw
          <Typography variant="h2" component="span" fontWeight="700">
            music
          </Typography>
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: "30px",
          right: "20px",
          alignItems: "center",
          gap: "0.5rem",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <p>Github</p>
        <Link href="https://github.com/jorgepedraza88/npaw_itunes_app" target="_blank" color="#fff">
          <GitHubIcon sx={{ fontSize: "2rem", zIndex: "99" }} className="github_icon" />
        </Link>
      </Box>
    </header>
  );
};

export default Header;
