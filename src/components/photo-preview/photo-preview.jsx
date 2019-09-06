import "./photo-preview.scss";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function PhotoPreview({ selected_photo }) {
  return selected_photo ? (
    <div className="photo-preview">
      <div className="photo-preview__image">
        <img src={selected_photo.url} alt={selected_photo.title} />
      </div>
      <div className="photo-preview__title"> {selected_photo.title}</div>
    </div>
  ) : (
    "Loading..."
  );
}

const mapStateToProps = state => ({
  selected_photo: state.gallery.selected_photo
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoPreview);
