import React, { Component } from "react";
import Axios from "axios";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github Username"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    Axios.request({
      method: "GET",
      url: `https://api.github.com/users/${this.state.userName}`
    })
      .then(response => {
        console.log(response);
        this.props.onSubmit(response.data);
        this.setState({ userName: "" });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  };
  handleChange = event => {
    this.setState({ userName: event.target.value });
  };
}

export default SearchForm;
