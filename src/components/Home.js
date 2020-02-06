import React, { Component } from "react";
import { Bar } from "./Bar";
import { Helmet } from "react-helmet";
import { Welcome } from "./Welcome";
import { About } from "./About";
import { Education } from "./Education";
import { Work } from "./Work";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Helmet>
          <style>{"body { background-color: #121212; }"}</style>
        </Helmet>
        <Bar />
        <Welcome />
        <About />
        <Education />
        <Work />
        <Skills />
        <Portfolio />
      </div>
    );
  }
}
