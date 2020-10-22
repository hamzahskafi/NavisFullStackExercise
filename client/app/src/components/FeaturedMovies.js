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

  useEffect(() => {
    dispatch(buildAction(FETCH_FEATURED_MOVIES));
  }, []);

  const movies = useSelector(selectMovies);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  // console.log('selectedMovie: ', selectedMovie);

  return (
    <div className={classes.root}>
        <MovieDetailsModal
          selectedMovie={selectedMovie}
          closeModal={() => setIsModalVisible(false)}
          isModalVisible={isModalVisible}
        />
      {movies.map((movie, index) => (
        <div key={index}
          onClick={() => {
            setSelectedMovie(movie);
            setIsModalVisible(true);
          }}
        >
          <MovieCard large data={movie} key={index} />
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(FeaturedMovies);
