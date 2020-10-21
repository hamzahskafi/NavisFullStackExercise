import { all, takeLatest, put } from 'redux-saga/effects';
import * as Actions from '@app/modules/actions';
import buildAction from '@app/util/buildAction';
import axios from 'axios';

function* fetchFeaturedMovies(action) {
  const response = yield axios.get('/api/movie/featured');
  yield put(buildAction(Actions.SET_MOVIES, response.data));
}

function* getMovieResults(action) {
  const response = yield axios.get('/api/movie/search', {
    params: {
        title: titleFromSearchBar,
        actor: actorFromSearchBar,
        genre_id: genreIdFromSelector
    }
});
  yield put(buildAction(Actions.SET_MOVIES, response.data));
}

export default function* watchAll() {
  yield all([
    takeLatest(Actions.FETCH_FEATURED_MOVIES, fetchFeaturedMovies),
    takeLatest(Actions.GET_MOVIE_RESULTS, getMovieResults),
  ]);
}
