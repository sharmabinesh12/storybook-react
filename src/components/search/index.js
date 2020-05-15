import React from "react";
import PropTypes from 'prop-types';

const Searchbox = ({
	SearchLogo,
	Close,
	onSearchInput,
	placeholder,
	searchValue,
	closeButtonCB
}) => (
  <div className="search-view-common">
    {SearchLogo && <img src={SearchLogo} alt="logo"/>}
    <input
      className="search-button"
      onChange={onSearchInput}
      type="text"
      autoFocus={true}
      placeholder={placeholder}
      value={searchValue}
    />
    {Close && <img src={Close} className="close-button" onClick={closeButtonCB} alt="logo"/>}
  </div>
);

Searchbox.propTypes = {
	SearchLogo:PropTypes.string,
	Close: PropTypes.string,
	placeholder:PropTypes.string,
	searchValue : PropTypes.string,
	closeButtonCB : PropTypes.func,
	onSearchInput:PropTypes.func,
};

Searchbox.defaultProps = {
	SearchLogo : '',
	Close : '',
	placeholder : '',
	searchValue : '',
	closeButtonCB : null,
	onSearchInput: null,
};

export default Searchbox;