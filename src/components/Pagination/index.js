import React from "react";
import PropTypes from 'prop-types';

import Chevron_left from "../../assets/img/icons/ic_chevron_first_teal.png";
import Chevron_right from "../../assets/img/icons/ic_chevron_last_teal.png";
import Chevron_arrow_left from "../../assets/img/icons/ic_chevron_next_teal.png";
import Chevron_arrow_right from "../../assets/img/icons/ic_chevron_previous_teal.png";
import { Input } from '../Form';
const Pagination = props => {
  const { LIST_SIZE, pageNumber } = props;
  // props.setListPageNumber(1)

  // const handlePaginationList = filterObj =>{
  //   // currentTempPageNumber = filterObj.pageNumber;
  //   props.setListPageNumber(filterObj.pageNumber);
  //   delete filterObj.pageNumber;
  //   props.handlePaginationList(filterObj);
  // }

  const onClickpaginationCB = (action,pageNum ) =>{    
    pageNum = parseInt(pageNum);
    const {pageNumber} = props;
    switch(action) {
      case 'first':
        if(pageNumber !== 1){
          callparticularAPI(1)
        }
        break;
      case 'previous':
        if(pageNum > 1 ){
          callparticularAPI(pageNum-1)
        }        
        break;
      case 'next':
        if(pageNum < getTotalPage() ){
          callparticularAPI(pageNum+1)
        }        
        break;
      case 'last':
        if(pageNumber !== getTotalPage()){     
          callparticularAPI(getTotalPage())
        }
        break;
      case 'jump':
        if(pageNum < 1 || pageNum > getTotalPage()){
          handleFlashMessage("Page number should be in range","error")
        } else {
          callparticularAPI(pageNum)
        }
        break;
      default:
        break;
    }
  }

  const callparticularAPI = (pageNumber) => {

    let filter = {
      "skip": String((pageNumber-1) * LIST_SIZE),
      "limit": LIST_SIZE
    }

    // if(props.dirtyStatus.__dirty) {
    //   props.pagination_confirmation({...filter, pageNumber});
    // } else {
      // currentTempPageNumber = pageNumber;
      props.setListPageNumber(pageNumber);
      props.handlePaginationList(filter);
    // }

  }

  const handlePageNumberChange = e =>{
    props.setListPageNumber(e.target.value);
  }

  const updateJumpPageNumber = e =>{
    if(e.keyCode === 13){
      onClickpaginationCB('jump', props.pageNumber);
    }
  }

  const handleFlashMessage = (data,notifyType) =>{
		let elem = notifyType === "error" ? document.getElementById('flash-error') : document.getElementById('flash-success') ;
		if(elem){
			elem.innerHTML = JSON.stringify(data);
			elem.style.display = "block";
			setTimeout(()=>{
					elem.style.display = "none";
			},3000);
		}
	}

  const getTotalPage = () =>{
    const { maxCount } = props;
    var totalPage = maxCount ? parseInt((maxCount / LIST_SIZE)+(maxCount % LIST_SIZE === 0? 0 : 1)) : 1
    return totalPage;
  }

  return (
    <div className="pagination-view-common">
      <div id="flash-error" className="flash flash-error">Something went wrong. Please try again!</div>
      <div className="display-flex-row">
        <div onClick={() => onClickpaginationCB("first", pageNumber)} className="inner-alignment" title="First page">
          <img src={Chevron_left} alt="logo" />
        </div>
        <div onClick={() => onClickpaginationCB("previous", pageNumber)} className="inner-alignment" title="Previous page">
          <img src={Chevron_arrow_right} alt="logo"/>
        </div>
      </div>
      <div className="display-flex-row input-box">
        <Input className="page-input-field" type="number" min="1" max={getTotalPage()} value={pageNumber} onChange={(e)=>handlePageNumberChange(e)} onKeyDown={(e)=>updateJumpPageNumber(e)}/> 
        <span className="page-number-field"> of {getTotalPage()}</span>
      </div>
      <div className="display-flex-row">
        <div onClick={() => onClickpaginationCB("next", pageNumber)} className="inner-alignment" title="Next page">
          <img src={Chevron_arrow_left} alt="logo" />
        </div>
        <div onClick={() => onClickpaginationCB("last", pageNumber)} className="inner-alignment" title="Last page">
          <img src={Chevron_right} alt="logo"/>
        </div>
      </div>
    </div>
  )
}
Pagination.propTypes = {
  maxCount: PropTypes.number,
  pageNumber:PropTypes.number,
  LIST_SIZE : PropTypes.number,
  handlePaginationList:PropTypes.func,
  setListPageNumber:PropTypes.func
};

Pagination.defaultProps = {
  maxCount:1,
  pageNumber:2,
  LIST_SIZE : 15,
  handlePaginationList:null,
  setListPageNumber:null
};

export default Pagination;