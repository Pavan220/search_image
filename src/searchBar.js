import React, { Component } from "react";
import ImgContent from "./imgContent";
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      tempVal: "",
      searchData: null,
    };
  }
  onFormSub = (e) => {
    e.preventDefault();
    this.setState({ searchData: this.state.tempVal, tempVal: "" });
  };
  onTxtChange = (e) => {
    this.setState({ tempVal: e.target.value, searchData: null });
  };
  render() {
    return (
      <div>
        <nav className="nav-search">
          <form onSubmit={this.onFormSub}>
            Search Image:
            <input
              className="searchbox"
              value={this.state.tempVal}
              onChange={this.onTxtChange}
              type="text"
            />
          </form>
        </nav>
        {this.state.searchData !== null ? (
          <ImgContent searchVal={this.state.searchData} />
        ) : null}
      </div>
    );
  }
}

export default SearchBar;
