import React, { Component } from 'react';
import Pagination from '../../../components/Pagination';

class PaginationDocs extends Component {
  constructor() {
    super();

    this.state = {
      page: 1,
      disablePrev: true,
      disableNext: false,
      minPage: 1,
      maxPage: 10
    };
  }

  onPageChange = page => {
    this.setState(prevState => ({
      page,
      disablePrev: page === prevState.minPage,
      disableNext: page >= prevState.maxPage
    }));
  };

  toggleSetting = e => {
    const { value } = e.target;

    this.setState(prevState => ({ [value]: !prevState[value] }));
  };

  changeSetting = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { page, disablePrev, disableNext, minPage, maxPage } = this.state;
    return (
      <>
        <h3>Pagination</h3>
        <div className="row">
          <div className="col-sm-6">
            Controls
            <div>
              <input
                type="number"
                name="minPage"
                id="minPage"
                value={minPage}
                onChange={e => this.changeSetting(e)}
              />
              <label htmlFor="minPage"> minPage</label>
            </div>
            <div>
              <input
                type="number"
                name="maxPage"
                id="maxPage"
                value={maxPage}
                onChange={e => this.changeSetting(e)}
              />
              <label htmlFor="maxPage"> maxPage</label>
            </div>
            <div>
              <input
                id="disablePrev"
                type="checkbox"
                name="disablePrev"
                value="disablePrev"
                checked={disablePrev}
                onChange={e => this.toggleSetting(e)}
              />
              <label htmlFor="disablePrev"> Toggle disablePrev</label>
            </div>
            <div>
              <input
                id="disableNext"
                type="checkbox"
                name="disableNext"
                value="disableNext"
                checked={disableNext}
                onChange={e => this.toggleSetting(e)}
              />
              <label htmlFor="disableNext"> Toggle disableNext</label>
            </div>
          </div>
          <div className="col-sm-6">
            <Pagination
              onPageChange={this.onPageChange}
              page={page}
              disablePrev={disablePrev}
              disableNext={disableNext}
              maxPage={maxPage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default PaginationDocs;
