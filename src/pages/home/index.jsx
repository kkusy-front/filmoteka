import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

import TopRated from "./TopRated";
import Discover from "./Discover";

const Main = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Home = () => {
  return (
    <Main container component="main">
      <TopRated />
      <Discover />
    </Main>
  );
};

export default Home;
