import { call, put, takeLatest, select } from 'redux-saga/effects';
import { PhotosApi } from '../../services/photos.service';
import { GalleryActionsTypes } from '../actions/photos.actions';

const getPagination = state => ({
  page: state.gallery.page,
  limit: state.gallery.limit,
});
const getSelectedPhoto = state => state.gallery.selected_photo;

function* fetchPhotos() {
  const pagination = yield select(getPagination);
  const selected_photo = yield select(getSelectedPhoto);
  try {
    const result = yield call(
      PhotosApi.getPhotos,
      pagination.page,
      pagination.limit
    );
    yield put({
      type: GalleryActionsTypes.FETCH_PHOTOS_SUCCESS,
      payload: result.data,
    });
    yield put({
      type: GalleryActionsTypes.SET_SELECTED_PHOTO,
      payload: selected_photo || (result.data.length ? result.data[0] : null),
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: GalleryActionsTypes.FETCH_PHOTOS_FAILURE,
    });
  }
}

function* PhotosSaga() {
  yield takeLatest(GalleryActionsTypes.FETCH_PHOTOS, fetchPhotos);
  yield takeLatest(GalleryActionsTypes.SET_PAGE, fetchPhotos);
}

export default PhotosSaga;
