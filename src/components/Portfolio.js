import React, { Component } from "react";
import { FlipCard } from "./FlipCard";

const headingStyle = {
  color: "#fff",
  textAlign: "center",
  paddingTop: "50px",
  marginBottom: "0px",
};

const divStyle = {
  padding: "10%",
  display: "flex",
  justifyContent: "center",
};

const phone = {
  padding: "40%",
  display: "flex",
  justifyContent: "center",
};
export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
    this.scrollToMyRef = this.scrollToRef.bind(this);
  }

  scrollToRef = () => window.scrollTo(0, this.Ref.current.offsetTop);
  render() {
    return (
      <div ref={this.Ref}>
        <h1 style={headingStyle}>Portfolio</h1>
        <div
          style={
            this.props.isMobile
              ? { paddingBottom: "15%" }
              : { paddingBottom: "5%" }
          }
        >
          <div style={this.props.isMobile ? phone : divStyle}>
            <FlipCard
              title="This Website"
              content="Personal Website"
              backside="React, Flask, Docker"
              url="https://github.com/sebastianpenttinen/personalSite"
            />
          </div>
          <div style={this.props.isMobile ? phone : divStyle}>
            <FlipCard
              title="Mortgage Planner"
              content="Figure out monthly payments for a mortgage"
              backside="Vue.js, Spring Boot, Swagger, MongoDB, Docker"
              url="https://github.com/sebastianpenttinen/Mortgage-Planner"
            />
          </div>
          <div style={this.props.isMobile ? phone : divStyle}>
            <FlipCard
              title="EZAI"
              content="Dynamically generate API endpoints for ML models"
              backside="Django, Django Rest Framework, PostgreSQL, Bulma, SendGrid"
              url="https://github.com/sebastianpenttinen/EZAI"
            />
          </div>
          <div style={this.props.isMobile ? phone : divStyle}>
            <FlipCard
              title="Yle-Crawler"
              content="Crawl Svenska Yle for their daily news tl;dr and get it emailed to you"
              backside="Beautiful Soup, SendGrid"
              url="https://github.com/sebastianpenttinen/yle-crawler"
            />
          </div>
          <div style={this.props.isMobile ? phone : divStyle}>
            <FlipCard
              title="Master Thesis, TBP"
              content="Collision avoidance in a maritime setting using Reinforcement Learning"
              backside="Open Ai Gym, Keras-rl, Tensorflow, Keras"
              url="https://github.com/sebastianpenttinen"
            />
          </div>
        </div>
      </div>
    );
  }
}
