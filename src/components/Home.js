import React, { Component} from "react";
import { Bar } from './Bar';
import { Helmet } from 'react-helmet';
import { Welcome } from "./Welcome";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Helmet>
                <style>{'body { background-color: #121212; }'}</style>
            </Helmet>
        <Bar/>
        <Welcome/>
      </div>
    );
  }
}