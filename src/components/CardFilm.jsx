import React from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function CardFilm({ props, styled, imgH }) {
  return (
    <Card sx={styled}>
      <CardMedia
        component="img"
        height={imgH}
        image={"https://image.tmdb.org/t/p/w500" + props.poster_path}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="span">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Zobacz więcej</Button>
      </CardActions>
    </Card>
  );
}
