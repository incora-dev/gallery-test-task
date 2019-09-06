export const GalleryActions = {
  FETCH_PHOTOS: 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS: 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_FAILURE: 'FETCH_PHOTOS_FAILURE',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  SET_PAGE: 'SET_PAGE',
};

/**
 *  Get photos
 */
export const getPhotos = () => {
  return {
    type: GalleryActions.FETCH_PHOTOS,
  };
};

/**
 *  Set selected photo
 * @param {object} photo - selected photo object
 */
export const setSelectedPhoto = photo => {
  return {
    type: GalleryActions.SET_SELECTED_PHOTO,
    payload: photo,
  };
};

/**
 *  Set pagination page
 * @param {number} page - page number
 */
export const setPage = page => {
  return {
    type: GalleryActions.SET_PAGE,
    payload: page,
  };
};
