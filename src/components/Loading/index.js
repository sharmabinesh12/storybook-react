import React from 'react';
import PropTypes from 'prop-types';
const Loading = props => {
  let styles = {
    ...props.styles,
    borderTop: `3px solid ${props.styles.color}`
  }
  const loaderDom = props.loading ? (
    <div className="loader">
      <div className="loader__symbol" style={styles}/>
      {props.description ? (
        <div className="loader__text">{props.description}</div>
      ) : null}
    </div>
  ) : null;
  return loaderDom;
};

Loading.propTypes = {
  description: PropTypes.string,
  loading: PropTypes.bool,
  styles:PropTypes.object
};

Loading.defaultProps = {
  loading: false,
  styles:{color:'rgb(0, 160, 174)'}
};

export default Loading;

