import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getByID } from "../api/actions/filmsActions";

// STYLES
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Main = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(5),
}));

export default function GetFilm() {
  const filmByID = useSelector((state) => state.films.filmByID);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByID(params.id));
  }, [dispatch, params]);

  if (filmByID.length !== 0) {
    return (
      <Main container component="main">
        <Container fixed>
          <Grid container>
            <Grid item xs>
              <img
                src={`https://image.tmdb.org/t/p/w500${filmByID.poster_path}`}
                alt={filmByID.title}
                style={{ maxWidth: "400px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={7}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    variant="h2"
                    sx={{
                      mb: 0,
                      fontWeight: 700,
                      fontSize: "2.5rem",
                    }}
                  >
                    {filmByID.title}
                  </Typography>
                  <Typography
                    sx={{
                      mb: 3,
                    }}
                  >
                    {filmByID.genres.map((genre) => genre.name + " ")}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontWeight: 400,
                      fontSize: "1rem",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>Producent:</span>{" "}
                    {filmByID.production_companies.map(
                      (comp) => comp.name + " "
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontWeight: 400,
                      fontSize: "1rem",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>Rok produkcji:</span>{" "}
                    {filmByID.release_date}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      mb: 1,
                      fontWeight: 400,
                      fontSize: "1rem",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>Kraj:</span>{" "}
                    {filmByID.production_countries.map((countries) =>
                        countries.name + " "
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="p"
                    sx={{
                      mb: 3,
                      mt: 3,
                      fontWeight: 400,
                      fontSize: "1rem",
                    }}
                  >
                    {filmByID.overview}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Main>
    );
  } else {
    return <></>;
  }
}
