import React, { Component } from "react";

const workStyle = {
  background: "#fff",
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

const infoSpanStyle = {
  marginRight: "5px",
  marginLeft: "5px",
};

const colStyle = {
  paddingLeft: "10%",
  paddingRight: "10%",
  paddingBottom: "2%",
};

const subHeaderStyling = {
  color: "#6e7881",
  marginTop: "25px",
  fontSize: "larger",
};

export class Work extends Component {
  render() {
    return (
      <section style={workStyle}>
        <div style={colStyle}>
          <h1 style={headingStyle}>
            <span style={headingSpanStyle}>Work</span>
          </h1>
        </div>

        <div style={colStyle}>
          <div>
            <div>
              <h3 style={subHeaderStyling}>BeanBakers Ltd</h3>
              <p style={infoStyle}>
                Java Developer <span style={infoSpanStyle}>&bull;</span>{" "}
                <em>April 2020 - Present</em>
              </p>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>Working full time as a Java developer.</li>
                <li>
                  Main responsibility is subcontracting in various software
                  projects.
                </li>
                <li>Tech stack: Java, Spring, Quarkus, Vue.js</li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 style={subHeaderStyling}>Åbo Akademi University</h3>
              <p style={infoStyle}>
                Research Assistant <span style={infoSpanStyle}>&bull;</span>{" "}
                <em>November 2019 - April 2020</em>
              </p>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>Worked full time as a research assistant.</li>
                <li>Main responsibility was to write my master's thesis.</li>
                <li>Tech stack: Python, Open Ai gym, Qt</li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 style={subHeaderStyling}>Beamex Oy Ab</h3>
              <p style={infoStyle}>
                Software Developer Trainee{" "}
                <span style={infoSpanStyle}>&bull;</span>{" "}
                <em style={{ marginTop: "6px" }}>June 2018 - March 2020</em>
              </p>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>Part time work alongside studies.</li>
                <li>
                  Main responsibilities were implementation and development of
                  test automation.
                </li>
                <li>Tech stack: C#, Ranorex, Javascript</li>
              </ul>
            </div>
            <div>
              <h3 style={subHeaderStyling}>Beamex Oy Ab</h3>
              <p style={infoStyle}>
                IT Specialist Trainee <span style={infoSpanStyle}>&bull;</span>{" "}
                <em style={{ marginTop: "6px" }}>June 2017 - September 2018</em>
              </p>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>Part time work alongside studies.</li>
                <li>
                  Main responsibilities were system administration, user
                  assistance and tech support.
                </li>
              </ul>
            </div>
            <div>
              <h3 style={subHeaderStyling}>Beamex Oy Ab</h3>
              <p style={infoStyle}>
                IT Support Technician <span style={infoSpanStyle}>&bull;</span>{" "}
                <em style={{ marginTop: "6px" }}>June 2016 - August 2016</em>
              </p>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>Summer Job.</li>
                <li>
                  Main responsibilities were user assistance and tech support.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
