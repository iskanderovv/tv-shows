import { Box, Button } from "@mui/material";
import ShowsItemCard from "../shows-card-item/ShowsItemCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowsCard = ({ shows }) => {
  const [visibleMore, setVisibleMore] = useState(12);
  const navigate = useNavigate();

  const handleShowMoreShows = () => {
    setVisibleMore((prevShows) => prevShows + 8);
  };

  return (
    <Box>
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
            lg: "30px 20px",
            md: "30px 20px",
            sm: "30px 20px",
            xs: "30px 20px",
          },
        }}
      >
        {shows?.slice(0, visibleMore).map((show) => (
          <div
            key={show.id}
            onClick={() => {
              navigate(`/shows/${show.id}`);
            }}
          >
            <ShowsItemCard
              title={show.name}
              image={show.image.original}
            />
          </div>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          background: "#222933",
          textTransform: "capitalize",
          fontSize: "18px",
          display: "block",
          margin: "50px auto",
          "&:hover": {
            background: "#222933",
          },
        }}
        onClick={handleShowMoreShows}
      >
        Show more tv shows....
      </Button>
    </Box>
  );
};

export default ShowsCard;
