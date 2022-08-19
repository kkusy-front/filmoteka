import React from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CardFilm({ props, styled, imgH, rated }) {
  const checkIMG = (image) => {
    if (image === null) {
      return `https://via.placeholder.com/500`;
    } else {
      return `https://image.tmdb.org/t/p/w500${image}`;
    }
  };

  return (
    <Link to={`film/${props.id}`}>
      <Card sx={styled}>
        <CardMedia
          component="img"
          height={imgH}
          image={checkIMG(props.poster_path)}
          alt={props.title}
        />
        {rated === true ? (
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: 100,
              position: "absolute",
              backgroundColor: "primary.dark",
              right: 10,
              top: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 4,
              color: "#ffffff",
            }}
          >
            {props.vote_average}
          </Box>
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h6" component="span">
            {props.title ? props.title : props.original_name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Zobacz więcej</Button>
        </CardActions>
      </Card>
    </Link>
  );
}
