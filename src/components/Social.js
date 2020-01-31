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
            <SocialIcon className="fa fa-facebook" url="#" aria="facebook" />
            <SocialIcon className="fa fa-twitter" url="#" aria="twitter" />
            <SocialIcon className="fa fa-linkedin" url="#" aria="linkedin" />
            <SocialIcon className="fa fa-instagram" url="#" aria="instagram" />
            <SocialIcon className="fa fa-github" url="#" aria="github" />
          </li>
        </ul>
      </div>
    );
  }
}
