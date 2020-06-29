import React, { Component } from "react";
import { Social } from "./Social";
import ProfilePic from "../Pictures/ProfilePic.jpeg";

const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "20%",
  width: "300px",
  paddingTop: "20px",
};

const headingStyleWeb = {
  display: "flex",
};

const phone = {
  display: "flex",
  fontSize: "1.75rem",
};

const subHeadingWeb = {
  display: "flex",
};

const phoneSubHeading = {
  display: "flex",
  fontSize: "1rem",
};

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
    this.scrollToMyRef = this.scrollToRef.bind(this);
  }
  scrollToRef = () => window.scrollTo(0, this.Ref.current.offsetTop);
  render() {
    return (
      <div ref={this.Ref}>
        <img style={imageStyle} src={ProfilePic} alt="ProfilePic" />
        <h1
          className="justify-content-center"
          style={this.props.isMobile ? phone : headingStyleWeb}
        >
          Hello I'm Sebastian Penttinen
        </h1>
        <h3
          className="justify-content-center"
          style={this.props.isMobile ? phoneSubHeading : subHeadingWeb}
        >
          A Turku based software developer
        </h3>
        <Social />
      </div>
    );
  }
}
