// libs
import React from 'react';

// components
import { withStyles } from '@material-ui/core';
import Logo from '@app/components/Logo';
import SearchInput from '@app/components/SearchInput';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.app.darkGray,
    // TODO
  },
});

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Logo />
      <SearchInput />
    </div>
  );
};

export default withStyles(styles)(Header);
