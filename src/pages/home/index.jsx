import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import TopRated from "./TopRated";
import Discover from "./Discover";
import SeriesPopular from "./SeriesPopular"

const Main = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Home = () => {
  return (
    <Main container component="main">
      <Container fixed>
        <TopRated />
        <Discover />
        <SeriesPopular />
      </Container>
    </Main>
  );
};

export default Home;
