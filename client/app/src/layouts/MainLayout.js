// libs
import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

// components
import { withStyles } from "@material-ui/core";
import Header from "@app/components/Header";
import FeaturedMovies from "@app/components/FeaturedMovies";
import Footer from "@app/components/Footer";

// modules
import { immerHistory } from "@app/modules/store";

// assets
import bgImage from "@app/assets/moviebg.jpg";

const styles = (theme) => ({
  root: {
    // TODO
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
  content: {
    // TODO
  },
  body: {
    backgroundColor: theme.palette.app.gray,
    //TODO
  },
});

const MainLayout = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Router history={immerHistory}>
        <div className={classes.content}>
          <Header />

          <div className={classes.body}>
            <Switch>
              <Route path="/" exact component={FeaturedMovies} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default withStyles(styles)(MainLayout);
