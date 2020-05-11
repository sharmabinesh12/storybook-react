import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const {
    onPageChange,
    disablePrev,
    disableNext,
    page,
    minPage,
    maxPage
  } = props;

  const isPrevious = value => value === 'prev' && page > minPage;

  const isNext = value => value === 'next' && page < maxPage;

  const pageHandler = e => {
    const { value } = e.target;
    let newPage;
    if (isPrevious(value)) {
      newPage = page - 1;
    } else if (isNext(value)) {
      newPage = page + 1;
    }

    if (newPage) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__button pagination__button--prev"
        onClick={e => pageHandler(e)}
        value="prev"
        disabled={disablePrev}
      />
      <button type="button" className="pagination__button" disabled>
        {page}
      </button>
      <button
        type="button"
        className="pagination__button pagination__button--next"
        onClick={e => pageHandler(e)}
        value="next"
        disabled={disableNext}
      />
    </div>
  );
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  disableNext: PropTypes.bool,
  disablePrev: PropTypes.bool,
  page: PropTypes.number,
  minPage: PropTypes.number,
  maxPage: PropTypes.number
};

Pagination.defaultProps = {
  onPageChange: () => {},
  disablePrev: true,
  disableNext: false,
  page: 1,
  minPage: 1,
  maxPage: 999
};

export default Pagination;
