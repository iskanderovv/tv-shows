import "./App.css";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import axiosBase from "./api";
import { useEffect, useState } from "react";
import ShowsCard from "./components/shows/ShowsCard";
import { Box, Container, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleShow from "./pages/single-show/SingleShow";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      try {
        setIsLoading(true);
        const response = await axiosBase("/shows");
        setData(response.data);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    dataLoad();
  }, []);

  return (
    <Router>
      <Box
        sx={{
          background: "#161d25",
          width: "100%",
          py: "50px",
        }}
      >
        <Container>
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
          {isLoading ? (
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
          ) : (
            <Routes>
              <Route path="/" element={<ShowsCard shows={data} />} />
              <Route path="/shows/:id" element={<SingleShow />} />
            </Routes>
          )}
        </Container>
      </Box>
    </Router>
  );
}

export default App;
