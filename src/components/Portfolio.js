import React, { Component } from "react";
import { FlipCard } from "./FlipCard";

const headingStyle = {
  color: "#fff",
  textAlign: "center",
  paddingTop: "50px",
  marginBottom: "0px"
};

const divStyle = {
  padding: "10%",
  display: "flex",
  justifyContent: "center"
};
export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
    this.scrollToMyRef = this.scrollToRef.bind(this);
    this.toggleSiteHover = this.toggleSiteHover.bind(this);
    this.toggleEzaiHover = this.toggleEzaiHover.bind(this);
    this.toggleYleHover = this.toggleYleHover.bind(this);
    this.toggleThesisHover = this.toggleThesisHover.bind(this);
    this.state = {
      siteHover: false,
      ezaiHover: false,
      yleHover: false,
      thesisHover: false
    };
  }

  scrollToRef = () => window.scrollTo(0, this.Ref.current.offsetTop);

  toggleSiteHover() {
    this.setState({
      siteHover: !this.state.siteHover
    });
  }

  toggleEzaiHover() {
    this.setState({
      ezaiHover: !this.state.ezaiHover
    });
  }

  toggleYleHover() {
    this.setState({
      yleHover: !this.state.yleHover
    });
  }

  toggleThesisHover() {
    this.setState({
      thesisHover: !this.state.thesisHover
    });
  }

  render() {
    return (
      <div ref={this.Ref}>
        <h1 style={headingStyle}>Portfolio</h1>
        <div>
          <div
            style={divStyle}
            onMouseEnter={this.toggleSiteHover}
            onMouseLeave={this.toggleSiteHover}
          >
            <FlipCard
              title="This Website"
              content="Personal Website"
              backside="Tech Stack:"
              hover={this.state.siteHover}
            />
          </div>
          <div
            style={divStyle}
            onMouseEnter={this.toggleEzaiHover}
            onMouseLeave={this.toggleEzaiHover}
          >
            <FlipCard
              title="EZAI"
              content="Dynamically generate API endpoints for ML models"
              backside="Tech Stack:"
              hover={this.state.ezaiHover}
            />
          </div>
          <div
            style={divStyle}
            onMouseEnter={this.toggleYleHover}
            onMouseLeave={this.toggleYleHover}
          >
            <FlipCard
              title="Yle-Crawler"
              content="Crawl Svenska Yle for their daily news tl;dr and get it emailed to you"
              backside="Tech Stack:"
              hover={this.state.yleHover}
            />
          </div>
          <div
            style={divStyle}
            onMouseEnter={this.toggleThesisHover}
            onMouseLeave={this.toggleThesisHover}
          >
            <FlipCard
              title="Master Thesis"
              content="Collision avoidance in a maritime setting using Reinforcement Learning"
              backside="Tech Stack:"
              hover={this.state.thesisHover}
            />
          </div>
        </div>
      </div>
    );
  }
}
