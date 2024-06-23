import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosBase from "../../api";
import { Box, Typography, Container } from "@mui/material";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const SingleShow = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axiosBase(`/shows/${id}`);
        setShow(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShow();
  }, [id]);

  if (!show) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader
          center
          size="md"
          backdrop
          inverse
          speed="normal"
          content="Tv Shows are loading...."
        />
      </Box>
    );
  }


  return (
    <Box sx={{ background: "#161d25", py: 5 }}>
      <Container>
        <Box
          sx={{
            display: {lg:"flex", md:"flex", sm:"block", xs:"block"},
            gap: "50px",
            color: "#a5bbdc",
          }}
        >
          <img src={show.image.original} width={300} alt={show.name} />
          <Box sx={{mt: {sm: "50px", xs:"50px"}}}>
            <Typography variant="h4" gutterBottom>
            {show.name}:
            </Typography>
            <Typography variant="body1" py={1}>
              {show.summary}
            </Typography>
            <Typography variant="h6" sx={{ display: "flex", gap: "3px" }}>
              Genres:
              {show.genres.map((genre, index) => (
                <Typography key={index} variant="h6" sx={{ color: "#0c8789" }}>
                  {genre}
                  {index < show.genres.length - 1 ? "," : ""}
                </Typography>
              ))}
            </Typography>
            <Typography variant="h6">
              Language: <i style={{ color: "#0c8789" }}>{show.language}</i>
            </Typography>
            <Typography variant="h6">
              Country: <i style={{ color: "#0c8789" }}>{show.network.country.name}</i>
            </Typography>
            <Typography variant="h6">
              Premiered: <i style={{ color: "#0c8789" }}>{show.premiered}</i>
            </Typography>
            <Typography variant="h6">
              Rating: <i style={{ color: "#0c8789" }}>{show.rating.average}</i>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SingleShow;
