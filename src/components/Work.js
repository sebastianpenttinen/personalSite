import React, { Component } from "react";

const workStyle = {
  background: "#fff",
  paddingTop: "50px",
  overflow: "hidden"
};

const headingStyle = {
  color: "Black",
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "2.0em"
};

const headingSpanStyle = {
  borderBottom: "3px solid #11abb0",
  paddingBottom: "6px"
};

const infoStyle = {
  color: "#6e7881",
  marginBottom: "18px",
  marginTop: "9px"
};

const infoSpanStyle = {
  marginRight: "5px",
  marginLeft: "5px"
};

const colStyle = {
  paddingLeft: "10%",
  paddingRight: "10%"
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
              <h3>Awesome Design Studio</h3>
              <p style={infoStyle}>
                Senior UX Designer <span style={infoSpanStyle}>&bull;</span>{" "}
                <em>March 2010 - Present</em>
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum
                felis eu pede mollis pretium.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h3>Super Cool Studio</h3>
              <p style={infoStyle}>
                UX Designer <span style={infoSpanStyle}>&bull;</span>{" "}
                <em style={{ marginTop: "6px" }}>March 2007 - February 2010</em>
              </p>

              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                tincidunt auctor a ornare odio. Sed non mauris vitae erat
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
