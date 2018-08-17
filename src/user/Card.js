import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img
          style={{ widht: 75, height: 75 }}
          src={this.props.avatar_url}
          alt="avatar"
        />
        <div>{this.props.name}</div>
        <div>{this.props.company}</div>
      </div>
    );
  }
}

export default Card;
