import { createSelector } from "reselect";

const app = (state) => state.app;

export const selectMovies = createSelector(app, (app) => app.featuredMovies);
export const selectGenreList = createSelector(app, (app) => app.genreList);
export const selectMovieDetails = createSelector(
  app,
  (app) => app.movieDetails
);
