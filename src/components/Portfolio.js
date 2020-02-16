import React, { Component } from "react";

const columnStyle = {
  float: "left",
  width: "50%",
  padding: "10%",
  background: "#2b2b2b"
};

const headingStyle = {
  color: "#fff",
  textAlign: "center",
  paddingTop: "50px",
  marginBottom: "0px"
};

const paragraphStyle = {
  lineHeight: "30px",
  color: "#7a7a7a"
};

const subHeading = {
  color: "#fff"
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
      <div ref={this.Ref} style={{ background: "#2b2b2b" }}>
        <h1 style={headingStyle}>Portfolio</h1>
        <div>
          <div style={columnStyle}>
            <h2 style={subHeading}> This Website</h2>
            <p style={paragraphStyle}> Some text</p>
          </div>
          <div style={columnStyle}>
            <h2 style={subHeading}> Ezai</h2>
            <p style={paragraphStyle}> Some text</p>
          </div>
          <div style={columnStyle}>
            <h2 style={subHeading}> Yle-Crawler</h2>
            <p style={paragraphStyle}> Some text</p>
          </div>
          <div style={columnStyle}>
            <h2 style={subHeading}> Master Thesis</h2>
            <p style={paragraphStyle}> Some text</p>
          </div>
        </div>
      </div>
    );
  }
}
