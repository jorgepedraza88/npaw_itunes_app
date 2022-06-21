import { TableRow, TableCell, Link, Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const TableAlbumIndividual = ({ album }) => {
  const { artistName, artworkUrl100, primaryGenreName, collectionName, collectionViewUrl } = album;

  return (
    <TableRow>
      <TableCell>
        <img src={artworkUrl100} />
      </TableCell>
      <TableCell align="center">{collectionName}</TableCell>
      <TableCell align="center">{artistName}</TableCell>
      <TableCell align="center">{primaryGenreName}</TableCell>
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
            Listen it!
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default TableAlbumIndividual;
