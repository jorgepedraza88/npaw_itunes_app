// Components
import TableAlbumIndividual from "./TableAlbumIndividual";
// Material UI
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const TableAlbumns = ({ albums }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h3">Art Cover</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h3">Art Cover</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h3">Album name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h3">Artist name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h3">Genre</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums?.map((album) => (
            <TableAlbumIndividual key={album.collectionId} album={album} />
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TableAlbumns;
