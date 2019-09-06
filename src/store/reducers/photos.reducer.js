import { GalleryActions } from '../actions/photos.actions';

const initialState = {
  photos: [],
  loading: true,
  page: 1,
  limit: 20,
};

export default function gallery(state = initialState, action) {
  switch (action.type) {
    case GalleryActions.FETCH_PHOTOS: {
      return {
        ...state,
        loading: true,
      };
    }
    case GalleryActions.FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        photos: action.payload,
      };
    }
    case GalleryActions.FETCH_PHOTOS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
