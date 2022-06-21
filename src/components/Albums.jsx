// Hooks
import { useState } from "react";
// Components:
import AlbumIndividual from "./AlbumIndividual";
import TableAlbumns from "./TableAlbums";
// Context
import useItunes from "../hooks/useItunes";
// Material UI
import { Typography, Grid, Stack, Pagination, Box } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridOnIcon from "@mui/icons-material/GridOn";

const Albums = () => {
  const { albums, page, setPage } = useItunes();

  // State to show Grid or Table
  const [showVertical, setShowVertical] = useState(false);

  // Page Change
  const handleChange = async (e, value) => {
    setPage(value);
    window.location.href = "/#results";
  };

  return (
    <>
      {albums.length > 0 ? (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            id="results"
            marginY={5}
            variant="h3"
            component={"h2"}
            fontWeight="700"
            sx={{ scrollMarginTop: "2rem" }}s
          >
            Your search
          </Typography>
          <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <Typography
              marginY={5}
              variant="h6"
              fontWeight="700"
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              Change View
            </Typography>
            {!showVertical ? (
              <ViewListIcon
                onClick={() => setShowVertical(true)}
                fontSize="large"
                className="icon_list"
              />
            ) : (
              <GridOnIcon
                onClick={() => setShowVertical(false)}
                fontSize="large"
                className="icon_list"
              />
            )}
          </Box>
        </Box>
      ) : null}
      {!showVertical ? (
        <Grid container spacing={2}>
          {albums?.map((album) => (
            <AlbumIndividual key={album.collectionId} album={album} />
          ))}
        </Grid>
      ) : (
        <TableAlbumns albums={albums} />
      )}

      <Stack spacing={2} justifyContent="center" alignItems="center" marginY={3}>
        {albums?.length > 0 ? (
          <Pagination
            shape="rounded"
            count={5}
            color="primary"
            onChange={handleChange}
            defaultPage={1}
            page={page}
            size="large"
          />
        ) : null}
      </Stack>
    </>
  );
};

export default Albums;
