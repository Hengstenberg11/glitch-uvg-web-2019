import React, { Component } from 'react';
import './App.css';

export default class Background extends Component {
  render() {
    return (
      <div className="background">{this.props.children}</div>
    );
  }
}
