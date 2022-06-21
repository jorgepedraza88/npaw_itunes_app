import {
  Box,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const AlbumIndividual = ({ album }) => {
  const { artistName, artworkUrl100, primaryGenreName, collectionName, collectionViewUrl } = album;

  // API artwork was only 100x100 which made it too blurred, so I replace the size from the string et voilá - Good quality
  const cover = artworkUrl100.replace(/100x100/g, "300x300");

  return (
    <Grid item md={6} lg={3}>
      <Card
        sx={{
          minHeight: "30rem",
          display: "flex",
          flexDirection: "column",
          paddingX: "2rem",
          paddingY: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Link href={collectionViewUrl} target="_blank">
          <CardMedia
            className="cover"
            component="img"
            alt={`${collectionName} cover`}
            image={cover}
          />
        </Link>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography
              variant="body2"
              fontWeight="600"
              color="#336b6e"
              marginY={"0.2rem"}
              className="limit-artist"
            >
              {artistName}
            </Typography>
            <Typography variant="body2" fontWeight="600" color="#336b6e">
              {primaryGenreName}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            component="p"
            fontWeight="700"
            className="limit-title"
            marginTop={"6px"}
          >
            {collectionName}
          </Typography>
        </CardContent>
        <CardActions>
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
              Check this Album
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AlbumIndividual;
