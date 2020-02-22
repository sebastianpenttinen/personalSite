import React, { Component } from "react";
import { SocialIcon } from "./SocialIcon";
const socialStyle = {
  margin: "24px 0",
  padding: "0",
  fontSize: "30px",
  display: "flex",
  justifyContent: "center"
};

const socialListStyle = {
  display: "inline-block",
  margin: "0 15px",
  padding: "0"
};

export class Social extends Component {
  render() {
    return (
      <div>
        <ul style={socialStyle}>
          <li style={socialListStyle}>
            <SocialIcon
              className="fa fa-facebook"
              url="https://www.facebook.com/SebastianPenttinen1"
              aria="facebook"
            />
            <SocialIcon
              className="fa fa-linkedin"
              url="https://www.linkedin.com/in/sebastian-penttinen/"
              aria="linkedin"
            />
            <SocialIcon
              className="fa fa-instagram"
              url="https://www.instagram.com/sebu_penttinen/"
              aria="instagram"
            />
            <SocialIcon
              className="fa fa-github"
              url="https://github.com/sebastianpenttinen"
              aria="github"
            />
          </li>
        </ul>
      </div>
    );
  }
}
