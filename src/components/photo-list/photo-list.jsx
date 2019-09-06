import React from 'react';
import './photo-list.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedPhoto, setPage } from '../../store/actions/photos.actions';
import classNames from 'classnames';

function PhotoList({
  page,
  photos,
  selected_photo,
  setSelectedPhoto,
  setPage,
}) {
  /**
   *  Get item classes
   * @param {object} item - photo object
   */
  const getItemClasses = item =>
    classNames({
      'photo-list__item': true,
      'photo-list__item--selected':
        (item && item.id) === (selected_photo && selected_photo.id),
    });

  return (
    <div className="photo-list">
      {page !== 1 ? (
        <div onClick={() => setPage(page - 1)} className="photo-list__button">
          {'<'}
        </div>
      ) : null}
      {photos.map(item => (
        <div
          onClick={() => setSelectedPhoto(item)}
          key={item.id}
          className={getItemClasses(item)}>
          <img src={item.thumbnailUrl} alt={item.title} />
        </div>
      ))}
      <div onClick={() => setPage(page + 1)} className="photo-list__button">
        {'>'}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  selected_photo: state.gallery.selected_photo,
  photos: state.gallery.photos,
  page: state.gallery.page,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSelectedPhoto,
      setPage,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);
