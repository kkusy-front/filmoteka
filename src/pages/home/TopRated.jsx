import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getTopRated } from "../../api/actions/filmsActions";

// CAROUSEL SWIPER IMPORT
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/lazy";
import { Autoplay, Navigation, Lazy } from "swiper";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardFilm from "../../components/CardFilm";

const Home = () => {
  const topRated = useSelector((state) => state.films.filmsTopRated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRated());
  }, [dispatch]);

  if (topRated.length !== 0) {
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
          Najlepiej oceniane
        </Typography>
        <Grid container>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            modules={[Autoplay, Navigation, Lazy]}
            loop={true}
            navigation
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
            }}
            lazy={true}
          >
            {topRated.results.map((films) => {
              return (
                <SwiperSlide key={films.id}>
                  <CardFilm props={films} styled={{ maxWidth: 300 }} imgH="400" rated />
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
