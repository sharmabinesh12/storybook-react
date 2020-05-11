import React from 'react';
import PropTypes from 'prop-types';
const Loading = props => {
  const loaderDom = props.loading ? (
    <div className="loader">
      <div className="loader__symbol" />
      {props.description ? (
        <div className="loader__text">{props.description}</div>
      ) : null}
    </div>
  ) : null;
  return loaderDom;
};

Loading.propTypes = {
  description: PropTypes.string,
  loading: PropTypes.bool
};

Loading.defaultProps = {
  loading: false
};

export default Loading;

