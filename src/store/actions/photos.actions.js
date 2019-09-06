export const GalleryActions = {
  FETCH_PHOTOS: "FETCH_PHOTOS",
  FETCH_PHOTOS_SUCCESS: "FETCH_PHOTOS_SUCCESS",
  FETCH_PHOTOS_FAILURE: "FETCH_PHOTOS_FAILURE",
  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  SET_PAGE: "SET_PAGE",
  ADD_FAVORITES: "ADD_FAVORITES",
  REMOVE_FAVORITES: "REMOVE_FAVORITES"
};

/**
 *  Get photos
 */
export const getPhotos = () => {
  return {
    type: GalleryActions.FETCH_PHOTOS
  };
};

/**
 *  Set selected photo
 * @param {object} photo - selected photo object
 */
export const setSelectedPhoto = photo => {
  return {
    type: GalleryActions.SET_SELECTED_PHOTO,
    payload: photo
  };
};

/**
 *  Add photo to favorites
 * @param {object} photo - photo object
 */
export const addToFavorites = photo => {
  return {
    type: GalleryActions.ADD_FAVORITES,
    payload: photo
  };
};

/**
 *  Remove photo from favorites
 * @param {object} photo - photo object
 */
export const removeFromFavorites = photo => {
  return {
    type: GalleryActions.REMOVE_FAVORITES,
    payload: photo
  };
};

/**
 *  Set pagination page
 * @param {number} page - page number
 */
export const setPage = page => {
  return {
    type: GalleryActions.SET_PAGE,
    payload: page
  };
};
