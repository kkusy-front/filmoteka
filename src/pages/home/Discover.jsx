import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getDiscover } from "../../api/actions/filmsActions";

// CAROUSEL SWIPER IMPORT
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/lazy";
import { Autoplay, Navigation, Lazy } from "swiper";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const Home = () => {
  const filmsDiscover = useSelector((state) => state.films.filmsDiscover);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscover());
  }, [dispatch]);

  if (filmsDiscover.length !== 0) {
    return (
      <Grid container component="section">
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            fontWeight: 700,
            fontSize: "2.5rem",
          }}
        >
          Odkrywaj
        </Typography>
        <Grid container>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            modules={[Autoplay, Navigation, Lazy]}
            loop={true}
            navigation
            autoplay
            lazy={true}
          >
            {filmsDiscover.results.map((films) => {
              return (
                <SwiperSlide key={films.id}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      height="400"
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
