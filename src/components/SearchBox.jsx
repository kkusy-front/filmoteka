import React, { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSearch } from "../api/actions/filmsActions";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const SearchContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 0,
  width: "70%",
  height: "auto",
  backgroundColor: "rgba(97, 97, 97, 0.8)",
  zIndex: 999,
  boxShadow: 4,
}));

export default function BasicTextFields() {
  const searchList = useSelector((state) => state.films.searchList);
  const dispatch = useDispatch();
  const ref = React.useRef(null);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const onTextChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value.length > 0) {
      setVisible(true);
      debounce(dispatch(getSearch(e.target.value)), 2000);
    } else {
      setVisible(false);
    }
  };

  const handleShow = (currentRef) => {
    if (search.length > 0) {
      if (
        document.activeElement === currentRef.current.children[1].children[0]
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(false);
    }
  };

  console.log(Object.keys(searchList).length === 0)
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="search"
          label="Szukaj"
          variant="standard"
          onChange={onTextChange}
          value={search}
          ref={ref}
          onFocus={() => handleShow(ref)}
          onBlur={() => handleShow(ref)}
        />
      </Box>

      {visible ? (
        <SearchContainer>
          <Grid container>
            {Object.keys(searchList).length !== 0
              ? searchList.results.map((films) => {
                  return (
                    <Grid xs={3} key={films.id}>
                      <Card sx={{ maxWidth: 250 }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={
                            "https://image.tmdb.org/t/p/w500" +
                            films.poster_path
                          }
                          alt={films.title}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="span"
                          >
                            {films.title}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Zobacz więcej</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </SearchContainer>
      ) : null}
    </>
  );
}
