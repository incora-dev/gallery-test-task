import { GalleryActions } from '../actions/photos.actions';

const initialState = {
  photos: [],
  loading: true,
  selected_photo: null,

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
    case GalleryActions.SET_SELECTED_PHOTO: {
      return {
        ...state,
        selected_photo: action.payload,
      };
    }
    case GalleryActions.SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    default:
      return state;
  }
}
