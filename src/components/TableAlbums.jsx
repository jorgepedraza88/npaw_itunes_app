// Material UI
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TableAlbumIndividual from "./TableAlbumIndividual";

const TableAlbumns = ({ albums }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Art Cover</TableCell>
            <TableCell align="center">Album Name</TableCell>
            <TableCell align="center">Artist Name</TableCell>
            <TableCell align="center">Genre</TableCell>
            <TableCell align="center">Check on Itunes</TableCell>
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
