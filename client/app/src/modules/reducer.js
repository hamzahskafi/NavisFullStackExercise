import { handleActions } from 'redux-actions';
import * as Actions from './actions';

const initialState = {
  featuredMovies: [],
  searchMoviesRequestPayload: {}
};

const reducer = handleActions(
  {
    [Actions.SET_MOVIES]: (state, action) => {
      state.featuredMovies = action?.payload;
      return state;
    },
    [Actions.SET_SEARCH_MOVIES_REQ_PAYLOAD]: (state, action) => {
      state.searchMoviesRequestPayload = action?.payload;
      return state;
    },
  },
  initialState
);

export default reducer;
