import React, { Component } from 'react';

require('./cuadro.css');

export default class Robot extends Component {
  render() {
    return (
      <img src="https://duckduckgo.com/assets/onboarding/robot-icon-frameless.svg" className="imagenRobot" />
    );
  }
}
