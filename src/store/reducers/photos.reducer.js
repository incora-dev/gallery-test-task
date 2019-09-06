import { GalleryActionsTypes } from "../actions/photos.actions";

const initialState = {
  photos: [],
  favorite_photos: [],
  selected_photo: null,
  loading: true,
  page: 1,
  limit: 20
};

export default function gallery(state = initialState, action) {
  switch (action.type) {
    case GalleryActionsTypes.FETCH_PHOTOS: {
      return {
        ...state,
        loading: true
      };
    }
    case GalleryActionsTypes.FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        photos: action.payload
      };
    }
    case GalleryActionsTypes.FETCH_PHOTOS_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    case GalleryActionsTypes.SET_SELECTED_PHOTO: {
      return {
        ...state,
        selected_photo: action.payload
      };
    }
    case GalleryActionsTypes.SET_PAGE: {
      return {
        ...state,
        page: action.payload
      };
    }
    case GalleryActionsTypes.ADD_FAVORITES: {
      return {
        ...state,
        favorite_photos: [...state.favorite_photos, action.payload]
      };
    }
    case GalleryActionsTypes.REMOVE_FAVORITES: {
      return {
        ...state,
        favorite_photos: state.favorite_photos.filter(
          item => item.id !== action.payload.id
        )
      };
    }
    default:
      return state;
  }
}
