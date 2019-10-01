import React from 'react';
import Title from './title/index.js';
import Robot from './Robot.js';
import DataInfo from './DataInfo.js';
import DiscButton from './button-dist/index.js';

require('./cuadro.css');

export default class Cuadro extends React.Component {
  render() {
    return (
      <div className="cuadro">
        <div className="imagen">
          <Robot />
          <Title />
          <DataInfo />
          <DiscButton />

        </div>
      </div>
    );
  }
}
