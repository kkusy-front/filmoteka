import React, {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearch } from "../api/actions/filmsActions";

import CardFilm from "./CardFilm";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';


const SearchContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 0,
  width: "100%",
  height: "auto",
  backgroundColor: "rgba(97, 97, 97, 0.9)",
  zIndex: 999,
  boxShadow: 4,
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
}));

export default function BasicTextFields() {
  const searchList = useSelector((state) => state.films.searchList);
  const dispatch = useDispatch();
  const ref = React.useRef(null);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const handleGetSearch = (query) => {
    dispatch(getSearch(query));
  };


  function onTextChange(e) {
    setSearch(e.target.value);

    if (search.length > 1) {
      setVisible(true);
      handleGetSearch(e.target.value);
    } else {
      setVisible(false);
    }
  }

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
          InputProps={{
            endAdornment: search ? (
              <IconButton size="small" onClick={() => setSearch("")}>
                <ClearIcon />
              </IconButton>
            ) : undefined
          }}
        />
      </Box>

      {visible ? (
        <SearchContainer className="searchContainer">
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {Object.keys(searchList).length !== 0
              ? searchList.results.slice(0, 8).map((films) => {
                  return (
                    <Grid item xs={6} md={3} key={films.id}>
                      <CardFilm
                        props={films}
                        styled={{ maxWidth: 250, mb: 3 }}
                        imgH="200"
                      />
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
