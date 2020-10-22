// libs
import React from "react";

// components
import { withStyles, Typography } from "@material-ui/core";

// modules
import { SET_SELECTED_MOVIE_ID } from "@app/modules/actions";

// util
import buildAction from "@app/util/buildAction";

const styles = (theme) => ({
  root: {
    padding: "0 20px 50px",
    "& .MuiTypography-root": {
      color: theme.palette.app.white,
    },
  },
  clickable: {
    cursor: "pointer",
  },
  poster: {
    // TODO
  },
  title: {
    // TODO
  },
});

const MovieCard = (props) => {
  const { data, large = false, classes } = props;

  const width = large ? 267 : 200;
  const height = large ? 396 : 295;

  return (
    <div className={classes.root} style={{ width }}>
      <div className={classes.clickable}>
        <img
          src={`/images/${data.poster}`}
          alt={`${data.title} Poster`}
          className={classes.poster}
          style={{ width, height }}
        />
        <Typography className={classes.title}>{data.title}</Typography>
        <Typography>
          {data.year} ({data.rating})
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(MovieCard);
