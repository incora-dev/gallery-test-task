import gallery from "./photos.reducer";
import { GalleryActionsTypes } from "../actions/photos.actions";

describe("Photos reducer", () => {
  it("should return the initial state", () => {
    expect(gallery(undefined, {})).toEqual({
      photos: [],
      favorite_photos: [],
      selected_photo: null,
      loading: true,
      page: 1,
      limit: 20
    });
  });
  it("should handle FETCH_PHOTOS", () => {
    expect(
      gallery(
        {},
        {
          type: GalleryActionsTypes.FETCH_PHOTOS
        }
      )
    ).toEqual({
      loading: true
    });
  });
  it("should handle FETCH_PHOTOS_SUCCESS", () => {
    expect(
      gallery(
        {},
        {
          type: GalleryActionsTypes.FETCH_PHOTOS_SUCCESS,
          payload: [
            {
              albumId: 1,
              id: 1,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "https://via.placeholder.com/600/92c952",
              thumbnailUrl: "https://via.placeholder.com/150/92c952"
            }
          ]
        }
      )
    ).toEqual({
      loading: false,
      photos: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        }
      ]
    });
  });
  it("should handle FETCH_PHOTOS_FAILURE", () => {
    expect(
      gallery(
        {},
        {
          type: GalleryActionsTypes.FETCH_PHOTOS_FAILURE
        }
      )
    ).toEqual({
      loading: false
    });
  });
  it("should handle SET_SELECTED_PHOTO", () => {
    expect(
      gallery(
        {},
        {
          type: GalleryActionsTypes.SET_SELECTED_PHOTO,
          payload: {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
          }
        }
      )
    ).toEqual({
      selected_photo: {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      }
    });
  });
  it("should handle SET_PAGE", () => {
    expect(
      gallery(
        {},
        {
          type: GalleryActionsTypes.SET_PAGE,
          payload: 10
        }
      )
    ).toEqual({
      page: 10
    });
  });
  it("should handle ADD_FAVORITES", () => {
    expect(
      gallery(
        { favorite_photos: [] },
        {
          type: GalleryActionsTypes.ADD_FAVORITES,
          payload: {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
          }
        }
      )
    ).toEqual({
      favorite_photos: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        }
      ]
    });
    expect(
      gallery(
        {
          favorite_photos: [
            {
              albumId: 1,
              id: 1,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "https://via.placeholder.com/600/92c952",
              thumbnailUrl: "https://via.placeholder.com/150/92c952"
            }
          ]
        },
        {
          type: GalleryActionsTypes.ADD_FAVORITES,
          payload: {
            albumId: 1,
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/771796",
            thumbnailUrl: "https://via.placeholder.com/150/771796"
          }
        }
      )
    ).toEqual({
      favorite_photos: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796"
        }
      ]
    });
  });
  it("should handle REMOVE_FAVORITES", () => {
    expect(
      gallery(
        {
          favorite_photos: [
            {
              albumId: 1,
              id: 1,
              title: "accusamus beatae ad facilis cum similique qui sunt",
              url: "https://via.placeholder.com/600/92c952",
              thumbnailUrl: "https://via.placeholder.com/150/92c952"
            },
            {
              albumId: 1,
              id: 2,
              title: "reprehenderit est deserunt velit ipsam",
              url: "https://via.placeholder.com/600/771796",
              thumbnailUrl: "https://via.placeholder.com/150/771796"
            }
          ]
        },
        {
          type: GalleryActionsTypes.REMOVE_FAVORITES,
          payload: {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
          }
        }
      )
    ).toEqual({
      favorite_photos: [
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796"
        }
      ]
    });
  });
});
