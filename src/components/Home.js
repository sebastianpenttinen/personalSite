import React, { Component } from "react";
import { Bar } from "./Bar";
import { Helmet } from "react-helmet";
import { Welcome } from "./Welcome";
import { About } from "./About";
import { Education } from "./Education";
import { Work } from "./Work";
import { Portfolio } from "./Portfolio";
export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
    this.CVRef = React.createRef();
    this.SkillsRef = React.createRef();
    this.PortRef = React.createRef();
    this.scrollToMyRef = this.scrollToRef.bind(this);
    this.state = {
      mobile: window.innerWidth <= 1000 && window.innerHeight <= 1000,
    };
  }

  onClick = (event) => {
    switch (event.target.name) {
      case "Home":
        this.scrollToRef();
        break;
      case "CV":
        this.CVRef.current.scrollToRef();
        break;
      case "Portfolio":
        this.PortRef.current.scrollToRef();
        break;
      default:
    }
  };

  scrollToRef = () => window.scrollTo(0, this.Ref.current.offsetTop);

  render() {
    return (
      <div ref={this.Ref}>
        <Helmet>
          <style>{"body { background-color: #121212; }"}</style>
        </Helmet>
        <Bar scrollTo={this.onClick} />
        <Welcome ref={this.HomeRef} isMobile={this.state.mobile} />
        <About isMobile={this.state.mobile} />
        <Education ref={this.CVRef} />
        <Work />
        <Portfolio ref={this.PortRef} isMobile={this.state.mobile} />
      </div>
    );
  }
}
