// libs
import React, { useState, useEffect } from 'react';

// components
import {
  withStyles,
  TextField,
  Select,
  Button,
  MenuItem,
} from '@material-ui/core';
import { GET_MOVIE_RESULTS } from '@app/modules/actions';
import { selectMovieResults } from '@app/modules/selectors';

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

const handleSearch = props => {
  const { classes } = props;
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(buildAction(GET_MOVIE_RESULTS));
  }, []);

  const movies = useSelector(selectMovieResults);

  return (
    <div className={classes.root}>
      <TextField
        placeholder='Title'
        className={classes.input}
      />

      <TextField
        placeholder='Actor'
        className={classes.input}
      />

      <Select className={classes.input}>
        <MenuItem value='Genre'>
          <span className={classes.inputLabel}>Genre</span>
        </MenuItem>
      </Select>

      <Button onSubmit={handleSearch} className={classes.searchButton}>
        Search
      </Button>
    </div>
  );
};

export default withStyles(styles)(SearchInput);
