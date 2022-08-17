import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPopular } from "../../api/actions/seriesActions";

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
  const seriesPopular = useSelector((state) => state.series.seriesPopular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);

  if (seriesPopular.length !== 0) {
    return (
      <Grid container component="section">
        <Typography
          variant="h2"
          sx={{
            mb: 3,
            mt: 3,
            fontWeight: 700,
            fontSize: "2.5rem",
          }}
        >
          Popularne programy telewizyjne
        </Typography>
        <Grid container>
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            modules={[Autoplay, Navigation, Lazy]}
            loop={true}
            navigation
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            lazy={true}
          >
            {seriesPopular.results.map((films) => {
              return (
                <SwiperSlide key={films.id}>
                  <CardFilm props={films} styled={{ maxWidth: 300 }} imgH="400" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Grid>
      </Grid>
    );
  } else {
    <>
    </>;
  }
};

export default Home;
