import React, { Component } from "react";
import axios from "axios";
class ImgContent extends Component {
  state = {
    jsondata: [],
    parameter: this.props.searchVal,
  };
  Search = (params) => {
    axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: { query: params },
        headers: {
          Authorization:
            "Client-ID fa_gQrUS_Zzk1p5npNmx8jbmNUa0IAIC6DClaCDw3II",
        },
      })
      .then((response) => {
        this.setState({
          jsondata: response.data.results,
        });
      });
  };
  componentDidMount() {
    this.setState({ parameter: this.props.searchVal });
    this.Search(this.state.parameter);
  }
  render() {
    console.log(this.state.parameter, this.state.jsondata);
    return (
      <div className="container">
        {this.state.jsondata.length !== 0 ? (
          this.state.jsondata.map((val) => {
            return <img alt="img" key={val.id} src={val.urls.small} />;
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default ImgContent;
