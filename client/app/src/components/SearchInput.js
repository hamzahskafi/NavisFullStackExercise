// libs
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import {
  withStyles,
  TextField,
  Select,
  Button,
  MenuItem,
} from '@material-ui/core';
import { GET_MOVIE_RESULTS } from '@app/modules/actions';
import { selectMovies } from '@app/modules/selectors';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
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
    color: '#ABABAB',
  },
});

const SearchInput = props => {
  const { classes } = props;
  const [title, setTitle] = useState()
  const [actor, setActor] = useState()
  const [genre, setGenre] = useState()
  const [genereList, setGenreList] = useState([]);

  const dispatch = useDispatch();
  
  const searchMovies = () => {
    dispatch(buildAction(GET_MOVIE_RESULTS));
  }

  return (
    <div className={classes.root}>
      <TextField
        placeholder='Title'
        className={classes.input}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
      />

      <TextField
        placeholder='Actor'
        className={classes.input}
        onChange={(e)=>{
          setActor(e.target.value);
        }}
      />

      <Select className={classes.input}>
        <MenuItem value='Genre'>
          <span className={classes.inputLabel}>Genre</span>
        </MenuItem>
      </Select>

      <Button onClick={searchMovies} className={classes.searchButton}>
        Search
      </Button>
    </div>
  );
};

export default withStyles(styles)(SearchInput);
