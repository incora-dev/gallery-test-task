import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './gallery.scss';
import { getPhotos } from '../../store/actions/photos.actions';
import { bindActionCreators } from 'redux';

function Gallery({ loading, getPhotos }) {
  /**
   *  Fetch photos on component mount
   */
  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return loading ? 'Loading...' : <div className="gallery">gallery</div>;
}
const mapStateToProps = state => ({
  loading: state.gallery.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPhotos,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
