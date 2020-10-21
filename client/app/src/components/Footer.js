// libs
import React from 'react';

// components
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    height: 64,
    backgroundColor: theme.palette.app.darkGray,
  },
});

const Footer = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
    </div>
  );
};

export default withStyles(styles)(Footer);
