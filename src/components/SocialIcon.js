import React, { Component } from "react";
const linkStyle = {
  color: "#fff",
  padding: "10px"
};

const hoverStyle = {
  color: "OrangeRed",
  padding: "10px"
};

export class SocialIcon extends Component {
  constructor(props) {
    super(props);
    this.toggleHover = this.toggleHover.bind(this);
    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }
  render() {
    return (
      <a
        aria-label={this.props.aria}
        style={this.state.hover ? hoverStyle : linkStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        href={this.props.url}
        className={this.props.className}
      >
        <i aria-hidden="true" />
      </a>
    );
  }
}
