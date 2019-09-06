import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./gallery.scss";
import { getPhotos } from "../../store/actions/photos.actions";
import { bindActionCreators } from "redux";
import PhotoList from "../photo-list/photo-list";
import PhotoPreview from "../photo-preview/photo-preview";

function Gallery({ page, loading, getPhotos, favorite_photos_count }) {
  /**
   *  Fetch photos on component mount
   */
  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return loading ? (
    "Loading..."
  ) : (
    <div className="gallery">
      <div className="gallery__preview">
        <PhotoPreview />
      </div>
      <div className="gallery__list">
        <div>
          Page: {page} | Favorites: {favorite_photos_count}
        </div>
        <PhotoList />
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  favorite_photos_count: state.gallery.favorite_photos.length,
  loading: state.gallery.loading,
  page: state.gallery.page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPhotos
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
