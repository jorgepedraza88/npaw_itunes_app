import { useState } from "react";
import useItunes from "../hooks/useItunes";
// Components
import { FormControl, TextField, Button, Box, Container, Typography } from "@mui/material";

const Search = () => {
  const { search, setSearch, searchAlbum } = useItunes();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search === "") {
      setError(true);
    } else {
      setError(false);
      await searchAlbum();
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
        color="white"
        maxWidth="90%"
      >
        The best App to Search your favourite albums
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
            placeholder="Artist, Album name..."
            inputProps={{
              style: {
                fontSize: "1.2rem",
                backgroundColor: "#f8f8f8",
                borderRadius: "5px",
                padding: "1rem",
                width: "20rem",
              },
            }}
            inputMode="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
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
