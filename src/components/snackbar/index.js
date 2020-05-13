import React from "react";
import PropTypes from 'prop-types'
import Button from "../Button";
const Snackbar = ({
	style,
	icon,
	color,
	text,
	buttons
})=> {
    return (
      <div className={style}>
        <div className={color}>
          <div className="loader">
            <img src={icon} alt="icon"/>
          </div>
          <p>{text}</p>
          <div className="snackbar-buttons">
            {buttons
              ? buttons.map((btn, i) => (
                <Button
                  type="button"
                  addClass={""}
                  key={i}
                  icon={btn.icon}
                  location={btn.location ? btn.location : ""}
                  text={btn.text}
                  onClick={btn.onClick.bind(
                    this,
                    btn.actionObj,
                    btn.pageNum ? btn.pageNum : "",
                    btn.agentSaveBtn ? btn.agentSaveBtn : ""
                  )}
                />
              ))
              : null}
          </div>
        </div>
      </div>
    );
}
Snackbar.propTypes = {
  style: PropTypes.string,
  icon:PropTypes.string,
  color : PropTypes.string,
  text:PropTypes.string,
  buttons:PropTypes.array
};

Snackbar.defaultProps = {
  style: '',
  icon:'',
  color : '',
  text:'',
  buttons:[]
};

export default Snackbar;
