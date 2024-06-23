import { Box, Button, Container, Typography } from "@mui/material";
import ShowsItemCard from "../shows-card-item/ShowsItemCard";
import { useState } from "react";

const ShowsCard = ({ shows }) => {
  const [visibleMore, setVisibleMore] = useState(12);


  const handleShowMoreShows = () => {
    setVisibleMore(prevShows => prevShows + 8);
  }


  return (
    <Box
      sx={{
        background: "#161d25",
        width: "100%",
        py: "70px",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            borderBottom: "1px solid gray",
            pb: "10px",
            color: "#a5bbdc",
            mb: "80px",
          }}
        >
          Tv Shows
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(4, 1fr)",
              md: "repeat(3, 1fr)",
              sm: "repeat(2, 1fr)",
              xs: "repeat(1, 1fr)",
            },
            placeItems: "center",
            gap: {
              lg: "30px 0px",
              md: "30px 0px",
              sm: "30px 20px",
              xs: "30px 20px",
            },
          }}
        >
          {shows?.slice(0, visibleMore).map(show => (
            <ShowsItemCard title={show.name} image={show.image.original} />
          ))}
        </Box>
        <Button variant="contained" sx={{
          background: "#222933",
          textTransform: 'capitalize',
          fontSize: '18px',
          display: 'block',
          margin: '50px auto',
          "&:hover": {
            background: '#222933'
          }
        }} onClick={handleShowMoreShows}>
          Show more tv shows....
        </Button>
      </Container>
    </Box>
  );
};

export default ShowsCard;
