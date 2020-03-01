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

const phone = {
  padding: "30%",
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
            style={this.props.isMobile ? phone : divStyle}
            onMouseEnter={this.toggleSiteHover}
            onMouseLeave={this.toggleSiteHover}
          >
            <FlipCard
              title="This Website"
              content="Personal Website"
              backside="React, Flask, Docker"
              hover={this.state.siteHover}
              url="https://github.com/sebastianpenttinen/personalSite"
            />
          </div>
          <div
            style={this.props.isMobile ? phone : divStyle}
            onMouseEnter={this.toggleEzaiHover}
            onMouseLeave={this.toggleEzaiHover}
          >
            <FlipCard
              title="EZAI"
              content="Dynamically generate API endpoints for ML models"
              backside="Django, Django Rest Framework, PostgreSQL, Bulma, SendGrid"
              hover={this.state.ezaiHover}
              url="https://github.com/sebastianpenttinen/EZAI"
            />
          </div>
          <div
            style={this.props.isMobile ? phone : divStyle}
            onMouseEnter={this.toggleYleHover}
            onMouseLeave={this.toggleYleHover}
          >
            <FlipCard
              title="Yle-Crawler"
              content="Crawl Svenska Yle for their daily news tl;dr and get it emailed to you"
              backside="Beautiful Soup, SendGrid"
              hover={this.state.yleHover}
              url="https://github.com/sebastianpenttinen/yle-crawler"
            />
          </div>
          <div
            style={this.props.isMobile ? phone : divStyle}
            onMouseEnter={this.toggleThesisHover}
            onMouseLeave={this.toggleThesisHover}
          >
            <FlipCard
              title="Master Thesis, TBP"
              content="Collision avoidance in a maritime setting using Reinforcement Learning"
              backside="Open Ai Gym, Keras-rl, Tensorflow, Keras"
              hover={this.state.thesisHover}
              url="https://github.com/sebastianpenttinen"
            />
          </div>
        </div>
      </div>
    );
  }
}
