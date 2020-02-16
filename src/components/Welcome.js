import React, { Component } from "react";
import { Social } from "./Social";
import ProfilePic from "../Pictures/ProfilePic.jpeg";

const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "25%",
  width: "200px",
  paddingTop: "20px"
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
        <h1 className="justify-content-center" style={{ display: "flex" }}>
          Hello I'm Sebastian Penttinen
        </h1>
        <h3 className="justify-content-center" style={{ display: "flex" }}>
          A Turku based software developer
        </h3>
        <Social />
      </div>
    );
  }
}
