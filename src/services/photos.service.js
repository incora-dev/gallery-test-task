import axios from "axios";
import { API_URL } from "../constants";

export const PhotosApi = {
  /**
   *  Fetch paginated photos from API
   * @param {number} page - current page for pagination
   * @param {number} limit - pagination items limit per page
   *
   * @return {Promise} - API request
   */
  getPhotos(page, limit) {
    return axios.get(`${API_URL}/photos`, {
      params: {
        _page: page,
        _limit: limit
      }
    });
  }
};
