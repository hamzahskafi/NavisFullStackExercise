import { createSelector } from 'reselect';

const app = state => state.app;

export const selectFeaturedMovies = createSelector(app, app => app.featuredMovies);
export const selectMovieResults = createSelector(app, app => app.getMovieResults);
