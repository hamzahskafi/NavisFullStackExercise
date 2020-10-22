import { handleActions } from "redux-actions";
import * as Actions from "./actions";

const initialState = {
  featuredMovies: [],
  genreList: [],
  movieDetails: {},
};

const reducer = handleActions(
  {
    [Actions.SET_MOVIES]: (state, action) => {
      state.featuredMovies = action?.payload;
      return state;
    },
    [Actions.SET_GENRE_LIST]: (state, action) => {
      state.genreList = action?.payload;
      return state;
    },
    [Actions.SET_MOVIE_DETAILS]: (state, action) => {
      state.movieDetails = action?.payload;
      return state;
    },
  },
  initialState
);

export default reducer;
