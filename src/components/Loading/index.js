import React from 'react';
import PropTypes from 'prop-types';
const Loading = props => {
  let styles = {
    ...props.styles,
    borderRight: `3.5px solid ${props.styles.color}`,
    borderLeft: `3.5px solid ${props.styles.color}`,
    borderBottom:  `3.5px solid ${props.styles.color}`
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
  loading: PropTypes.bool
};

Loading.defaultProps = {
  loading: false
};

export default Loading;

