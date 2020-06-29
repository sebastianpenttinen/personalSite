import React, { Component } from "react";

const educationStyle = {
  background: "#fff",
  paddingTop: "50px",
  paddingBottom: "50px",
  overflow: "hidden",
  textAlign: "center",
};

const headingStyle = {
  color: "Black",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "2.0em",
};

const headingSpanStyle = {
  borderBottom: "3px solid #11abb0",
  paddingBottom: "6px",
};

const infoStyle = {
  color: "#6e7881",
  marginBottom: "18px",
  marginTop: "9px",
};

const subHeaderStyling = {
  color: "#6e7881",
  marginTop: "25px",
  fontSize: "larger",
};
const infoSpanStyle = {
  marginRight: "5px",
  marginLeft: "5px",
};

const colStyle = {
  paddingLeft: "10%",
  paddingRight: "10%",
};

export class Education extends Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
    this.scrollToMyRef = this.scrollToRef.bind(this);
  }
  scrollToRef = () => window.scrollTo(0, this.Ref.current.offsetTop);
  render() {
    return (
      <section ref={this.Ref} style={educationStyle}>
        <div style={colStyle}>
          <div>
            <h1 style={headingStyle}>
              <span style={headingSpanStyle}>Education</span>
            </h1>
          </div>
          <div>
            <div>
              <div>
                <h3 style={subHeaderStyling}>Åbo Akademi University</h3>
                <p style={infoStyle}>
                  Master in Computer Science{" "}
                  <span style={infoSpanStyle}>&bull;</span>{" "}
                  <em>September 2018 - Jun 2020</em>
                </p>

                <p>
                  Thesis topic: COLREG compliant collision avoidance using
                  reinforcement learning
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3 style={subHeaderStyling}>Åbo Akademi University</h3>
                <p style={infoStyle}>
                  Bachelor's Degree in Computer Science{" "}
                  <span style={infoSpanStyle}>&bull;</span>{" "}
                  <em style={{ marginTop: "6px" }}>
                    September 2015 - May 2018
                  </em>
                </p>

                <p>
                  Thesis title: Diffie-Hellman key exchange protocol: function
                  and attacks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
