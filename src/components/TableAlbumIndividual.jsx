// MUI
import { TableRow, TableCell, Link, Button, Typography } from "@mui/material";
// Icons
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const TableAlbumIndividual = ({ album }) => {
  const { artistName, artworkUrl100, primaryGenreName, collectionName, collectionViewUrl } = album;

  return (
    <TableRow hover="true">
      <TableCell>
        <img src={artworkUrl100} />
      </TableCell>
      <TableCell align="center">
        <Typography>{collectionName}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{artistName}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{primaryGenreName}</Typography>
      </TableCell>
      <TableCell align="center">
        <Link
          href={collectionViewUrl}
          target="_blank"
          width={"100%"}
          textAlign={"center"}
          sx={{
            textDecoration: "none",
          }}
        >
          <Button startIcon={<OpenInNewIcon />} variant="contained" color="primary">
            Listen to it!
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default TableAlbumIndividual;
