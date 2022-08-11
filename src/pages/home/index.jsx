import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

import TopRated from "./TopRated";

const Main = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Home = () => {
  return (
    <Main container component="main">
      <TopRated />
    </Main>
  );
};

export default Home;
