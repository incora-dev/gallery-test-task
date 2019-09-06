import React from 'react';
import './photo-list.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  setSelectedPhoto,
  setPage,
  addToFavorites,
  removeFromFavorites,
} from '../../store/actions/photos.actions';
import classNames from 'classnames';

function PhotoList({
  page,
  photos,
  selected_photo,
  setSelectedPhoto,
  setPage,
  favorite_photos,
  addToFavorites,
  removeFromFavorites,
}) {
  /**
   *  Chech if photo is in favorites
   * @param {number} id - selected photo object
   *
   * @return {boolean} - returns true if photo is in favorites
   */
  const isFavorite = id => favorite_photos.some(item => item.id === id);

  /**
   *  Add photo to favorites or removes photo form favorites
   * @param {Event} e - click event
   * @param {object} item - photo object
   */
  const toggleFavorites = (e, item) => {
    e.stopPropagation();
    if (isFavorite(item.id)) {
      removeFromFavorites(item);
    } else {
      addToFavorites(item);
    }
  };

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
          <div
            className="photo-list__item-isfavorite"
            onClick={e => toggleFavorites(e, item)}>
            {isFavorite(item.id) ? '●' : '○'}
          </div>
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
  favorite_photos: state.gallery.favorite_photos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSelectedPhoto,
      setPage,
      addToFavorites,
      removeFromFavorites,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);
