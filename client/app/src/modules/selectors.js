import { createSelector } from 'reselect';

const app = state => state.app;

export const selectMovies = createSelector(app, app => app.featuredMovies);
