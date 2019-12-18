import React, { Component} from "react";
import {Nav} from 'react-bootstrap';

export class Bar extends Component {
  render() {
    return (
      <Nav className="justify-content-center" activeKey="#home">
    <Nav.Item>
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">CV</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Skills</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">Portfolio</Nav.Link>
    </Nav.Item>
  </Nav>
    )
  }
}


