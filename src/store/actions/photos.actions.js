export const GalleryActions = {
  FETCH_PHOTOS: 'FETCH_PHOTOS',
  FETCH_PHOTOS_SUCCESS: 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_FAILURE: 'FETCH_PHOTOS_FAILURE',
};

/**
 *  Get photos
 */
export const getPhotos = () => {
  return {
    type: GalleryActions.FETCH_PHOTOS,
  };
};
