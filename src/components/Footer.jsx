import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(0, 58, 93, 1) 80%, #336b6e 100%)",
      }}
    >
      <Typography align="center" variant="body2" color="#f1f5f9">
        This web application was made by Jorge Pedraza
      </Typography>
    </Box>
  );
};

export default Footer;
