// libs
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import buildAction from "@app/util/buildAction";

// components
import {
  withStyles,
  TextField,
  Select,
  Button,
  MenuItem,
} from "@material-ui/core";
import { FETCH_MOVIE_RESULTS } from "@app/modules/actions";
import { selectGenreList } from "@app/modules/selectors";
import { FETCH_GENRE_LIST } from "../modules/actions";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
  },
  input: {
    backgroundColor: theme.palette.app.white,
    marginRight: 8,
    // TODO
  },
  searchButton: {
    backgroundColor: theme.palette.app.yellow,
    // TODO
  },
  inputLabel: {
    color: "#ABABAB",
  },
});

const SearchInput = (props) => {
  const { classes } = props;
  const [title, setTitle] = useState();
  const [actor, setActor] = useState();
  const [genre_id, setGenre] = useState();
  const [genereList, setGenreList] = useState([]);
  const genreListSelector = useSelector(selectGenreList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buildAction(FETCH_GENRE_LIST));
  }, []);

  useEffect(() => {
    setGenreList(genreListSelector);
  }, [genreListSelector]);

  const missingParams = !title && !actor && !genre_id;

  const searchMovies = () => {
    dispatch(
      buildAction(FETCH_MOVIE_RESULTS, {
        title,
        actor,
        genre_id,
      })
    );
  };

  return (
    <div className={classes.root}>
      <TextField
        placeholder="Title"
        className={classes.input}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <TextField
        placeholder="Actor"
        className={classes.input}
        onChange={(e) => {
          setActor(e.target.value);
        }}
      />

      <Select className={classes.input}>
        {genereList.map((genreListItem, i) => (
          <MenuItem
            value={genreListItem.id}
            key={`genre-list-item-${i}`}
            onClick={() => {
              setGenre(genreListItem.id);
            }}
          >
            <span className={classes.inputLabel}>
              {genreListItem.description}
            </span>
          </MenuItem>
        ))}
      </Select>

      <Button
        disabled={missingParams}
        onClick={searchMovies}
        className={classes.searchButton}
      >
        Search
      </Button>
    </div>
  );
};

export default withStyles(styles)(SearchInput);
