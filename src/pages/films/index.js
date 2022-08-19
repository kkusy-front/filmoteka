import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Link,
  useLocation,
} from "react-router-dom";

import { getAllFilms } from "../../api/actions/filmsActions";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from '@mui/material/PaginationItem';
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import CardFilm from "../../components/CardFilm";

export default function Films() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  const allFilms = useSelector((state) => state.films.allFilms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFilms(page));
  }, [dispatch, page]);

  if (allFilms.length !== 0) {
    return (
        <Container fixed>
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
          Filmy
        </Typography>
        <Grid container spacing={3}>
          {allFilms.results.map((films) => {
            return (
              <Grid item xs={10} md={3}>
                <CardFilm props={films} styled={{ maxWidth: 300 }} imgH="400" />
              </Grid>
            );
          })}
        </Grid>
        <Grid container>
          <Grid item>
            <Stack spacing={2}>
              <Pagination
                count={allFilms.total_pages}
                page={page}
                renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/films${item.page === 1 ? '' : `?page=${item.page}`}`}
                      {...item}
                    />
                  )}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      </Container>
    );
  }
}
