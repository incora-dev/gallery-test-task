import { all } from "redux-saga/effects";
import PhotosSaga from "./photos.saga";

export default function* rootSaga() {
  yield all([PhotosSaga()]);
}
