import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getTopRated } from "../../api/actions/filmsActions";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Home = () => {
  const topRated = useSelector((state) => state.films.filmsTopRated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRated());
  }, [dispatch]);

  if (topRated.length !== 0) {
    return (
      <Grid container component="section">
        <Typography variant="h2">Top rated</Typography>
        <Grid container>
          <Swiper
      spaceBetween={50}
      slidesPerView={3}>
            {topRated.results.map((films) => {
              return (
                <SwiperSlide key={films.id}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={
                        "https://image.tmdb.org/t/p/w500" + films.poster_path
                      }
                      alt={films.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {films.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Zobacz więcej</Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid>
      </Grid>
    );
  } else {
    <Grid container component="section">
      <Typography variant="h2">Top rated</Typography>
      <Typography variant="h3">Loading</Typography>
    </Grid>;
  }
};

export default Home;
