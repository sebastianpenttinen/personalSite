import React, { Component } from "react";
import { Social } from "./Social";
export class Welcome extends Component {
  render() {
    return (
      <div>
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
