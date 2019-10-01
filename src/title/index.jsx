import React, { Component } from 'react';
import './index.css';

export default class Title extends React.Component {
  render() {
    return (
      <div className="div-title">
        <p style={{ fontWeight: 'bold' }}>
          {'Your data shouldn\'t be for sale. \nAt DuckDuckGo, we agree.'}
        </p>
      </div>
      /* <h3>Your data shouldn't be for sale. <br> </br>At DuckDuckGo, we agree.</h3> */
      // <Text>{`Your data shouldn't be for sale. \nAt DuckDuckGo, we agree.`}</Text>

    );
  }
}
