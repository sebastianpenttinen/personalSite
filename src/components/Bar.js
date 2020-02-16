import React, { Component } from "react";
import { Nav } from "react-bootstrap";

export class Bar extends Component {
  render() {
    return (
      <Nav className="justify-content-center" activeKey="#home">
        <Nav.Item>
          <Nav.Link name="Home" ref={this.Ref} onClick={this.props.scrollTo}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link name="CV" onClick={this.props.scrollTo}>
            CV
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link name="Skills" onClick={this.props.scrollTo}>
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link name="Portfolio" onClick={this.props.scrollTo}>
            Portfolio
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
