import { GalleryActions } from '../actions/photos.actions';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { PhotosApi } from '../../services/photos.service';

const getPagination = state => ({
  page: state.gallery.page,
  limit: state.gallery.limit,
});

function* fetchPhotos() {
  const pagination = yield select(getPagination);
  try {
    const result = yield call(
      PhotosApi.getPhotos,
      pagination.page,
      pagination.limit
    );
    yield put({
      type: GalleryActions.FETCH_PHOTOS_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: GalleryActions.FETCH_PHOTOS_FAILURE,
    });
  }
}

function* PhotosSaga() {
  yield takeLatest(GalleryActions.FETCH_PHOTOS, fetchPhotos);
}

export default PhotosSaga;
