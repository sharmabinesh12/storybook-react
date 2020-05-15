// import React from "react";
// import ReactDOM from "react-dom";
// // import Search from "../Search";
// import "./index.scss";
// import { ICONS, BW_ICONS } from "../constants";
// class Filter extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			searchText : '',
// 			filterObj : props.filterObj ? props.filterObj : [],
// 			appliedFiltersIds : []
// 		}
// 	}

// 	componentDidMount(){
// 		document.addEventListener("click", this.handleClick, false);
// 		this.setState({filterObj : this.props.filterObj ? this.props.filterObj : []})
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		if(nextProps.filterObj !== this.props.filterObj){
// 			this.setState({filterObj : nextProps.filterObj ? nextProps.filterObj : []});
// 		}
// 	}

//   componentWillUnmount() {
//     document.removeEventListener("click", this.handleClick, false);
//   }

// 	handleClick = e => {
//     if (!(ReactDOM.findDOMNode(this).contains(e.target) || e.target.id === "filter") ) {
// 			if(document.getElementById('filterId') && document.getElementById('filterId').style.display === 'block'){
// 				this.props.showFilterList(true);

// 			}
// 		}
// 	};

// 	handleSearchFilter = (e) =>{
// 		let keyText = e.target.value;
// 		if(this.props.filterType === "tagGroup"){
// 			let filter={
// 				langISO : this.props.agentData ? this.props.agentData.langISO : 'en'
// 			}
// 			this.props.tagGroupListAction(1, keyText, false, null, filter );
// 		}		
// 	}

// 	selDeselectFilterItem = (item) =>{
// 		let appliedFiltersIds = [...this.state.appliedFiltersIds];
// 		let appliedIndex = appliedFiltersIds.indexOf(item.id);
// 		if(appliedIndex > -1) {
// 			appliedFiltersIds.splice(appliedIndex,1);
// 			this.setState({appliedFiltersIds});
// 		} else {
// 			let newFilterObj = this.state.filterObj.map(v=>{
// 				if(v.id===item.id) {
// 					return { ... item, isSel : !v.isSel}
// 				} else {
// 					return v;
// 				}
// 			});
// 			this.setState({filterObj: newFilterObj})
// 		}
		
		
// 	}

// 	applyFilter = () =>{
// 		let appliedFilters = this.state.filterObj.filter(v=>v.isSel);
// 		let appliedFiltersIds = [...appliedFilters.map(item=>item.id),...this.state.appliedFiltersIds]
// 		this.setState({appliedFiltersIds})
// 		this.props.applyFilterAction(appliedFiltersIds)
// 	}

// 	clearAllFilter = () =>{
// 		let newFilterObj = this.state.filterObj.map(v=>{
// 			return {...v, isSel:false}
// 		});
// 		this.setState({filterObj: newFilterObj,appliedFiltersIds : []});
// 		this.props.applyFilterAction([])
// 	}
	
// 	render() {
// 		const {filterObj, appliedFiltersIds } = this.state;
// 		return (				
// 			<div className="dropdown-btn">
// 				<div className="arrow-up" style={{borderBottom:this.props.arrowColor}}/>
// 				<div className="filter-list">
// 					<div className="search-filter-box">											
// 						<input type="text" placeholder={this.props.searchPlaceHolder} onChange={(e) => this.handleSearchFilter(e)}/>
// 						<img src={BW_ICONS.SEARCH} alt="search" />
// 					</div>
// 					<ul className="f-dropdown-list">
// 						{filterObj.map((item,index)=>
// 							(	<li>											
// 									<button onClick={()=>this.selDeselectFilterItem(item)}>
// 										{(item.isSel || appliedFiltersIds.indexOf(item.id)>-1) && <img src={ICONS.DONE} alt="selected" /> }
// 										<span>{item.name}</span>
// 									</button>
// 								</li>
// 							))
// 						} 				             
// 					</ul>
// 					<div className="footer-btn">
// 						<div className="btn btn-clear-all" onClick={()=>this.clearAllFilter()}>
// 							<label className="btn-text">
// 								Clear All
// 							</label> 
// 						</div>				
// 						<div className="btn btn-apply" onClick={()=>this.applyFilter()}>
// 							<label className="btn-text">
// 								Submit
// 							</label> 
// 						</div>	
// 					</div>
// 				</div>		
// 			</div>	
// 		);
// 	}
// }


// export default Filter;


