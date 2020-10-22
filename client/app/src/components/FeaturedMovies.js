// libs
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { withStyles } from "@material-ui/core";
import MovieCard from "@app/components/MovieCard";

// modules
import { FETCH_FEATURED_MOVIES } from "@app/modules/actions";
import { selectMovies } from "@app/modules/selectors";

// util
import buildAction from "@app/util/buildAction";
import MovieDetailsModal from "./MovieDetailsModal";

const styles = (theme) => ({
  root: {
    // TODO
  },
});

const FeaturedMovies = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    dispatch(buildAction(FETCH_FEATURED_MOVIES));
  }, []);

  const movies = useSelector(selectMovies);

  return (
    <div className={classes.root}>
      {isModalVisible && (
        <MovieDetailsModal
          selectedMovie={selectedMovie}
          closeModal={() => setIsModalVisible(false)}
        />
      )}
      {movies.map((movie, index) => (
        <div
          onClick={() => {
            setIsModalVisible(true);
            setSelectedMovie(movie);
          }}
        >
          <MovieCard large data={movie} key={index} />
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(FeaturedMovies);
