import { all, takeLatest, put } from "redux-saga/effects";
import * as Actions from "@app/modules/actions";
import buildAction from "@app/util/buildAction";
import axios from "axios";

function* fetchFeaturedMovies(action) {
  const response = yield axios.get("/api/movie/featured");
  yield put(buildAction(Actions.SET_MOVIES, response.data));
}

function* fetchGenreList(action) {
  const response = yield axios.get("/api/genre/");
  yield put(buildAction(Actions.SET_GENRE_LIST, response.data));
}

function* fetchMovieResults(action) {
  console.log("action: ", action);
  const response = yield axios.get("/api/movie/search", {
    params: action.payload,
  });
  yield put(buildAction(Actions.SET_MOVIES, response.data));
}

function* fetchMovieDetails(action) {
  console.log("action: ", action);
  const response = yield axios.get("/api/movie/details", {
    params: action.payload,
  });
  yield put(buildAction(Actions.SET_MOVIE_DETAILS, response.data));
}

export default function* watchAll() {
  yield all([
    takeLatest(Actions.FETCH_FEATURED_MOVIES, fetchFeaturedMovies),
    takeLatest(Actions.FETCH_MOVIE_RESULTS, fetchMovieResults),
    takeLatest(Actions.FETCH_GENRE_LIST, fetchGenreList),
    takeLatest(Actions.FETCH_MOVIE_DETAILS, fetchMovieDetails),
  ]);
}
