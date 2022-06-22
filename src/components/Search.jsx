// Hooks
import { useState } from "react";
// Context
import useItunes from "../hooks/useItunes";
// MUI
import { FormControl, TextField, Button, Box, Typography } from "@mui/material";
// Icons
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const { search, setSearch, searchAlbum, setPage } = useItunes();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search === "") {
      setError(true);
      setPage(1);
    } else {
      setPage(1);
      setError(false);
      await searchAlbum();
      // Scroll to #results
      setTimeout(() => {
        window.location.href = "/#results";
      }, 50);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        display: "grid",
        placeItems: "center",
        marginBottom: "6rem",
      }}
    >
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h2"
        component={"h1"}
        fontFamily="Poppins"
        color="#fdfdfd"
        maxWidth="90%"
        sx={{ fontSize: "3rem" }}
      >
        The best app to find your favourite albums
      </Typography>
      {error && (
        <Typography color="error" variant="h6">
          The field can't be empty!
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            id="search"
            type="input"
            variant="filled"
            value={search}
            placeholder="Artist, Album, Genre..."
            inputProps={{
              style: {
                fontSize: "1.2rem",
                backgroundColor: "#f8f8f8",
                borderRadius: "5px",
                padding: "1rem",
              },
            }}
            sx={{
              width: {
                xs: "100%",
                md: "30rem",
              },
            }}
            inputMode="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            startIcon={<SearchIcon />}
            type="submit"
            size="large"
            variant="contained"
            sx={{ marginY: "2rem", textTransform: "none", fontSize: "1.4rem", width: "100%" }}
          >
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Search;
