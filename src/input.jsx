import React, { Component } from 'react';
import './App.css';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
    this.setText = this.setText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.search = this.search.bind(this);
  }

  setText() {
    this.setState({
      input: document.getElementsByName('search')[0].value,
    });
  }

  clearText() {
    this.setState({
      input: '',
    });
    document.getElementsByName('search')[0].value = '';
  }

  search(event) {
    event.preventDefault();
    const { input } = this.state;
    window.open(`https://duckduckgo.com/?q=${input}&t=h_&ia=web`);
  }

  render() {
    const { input } = this.state;
    const divStyle = {
      padding: '1.3em .8em 1em',
      maxWidth: '590px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      float: 'none',
      width: '70%',
    };

    const formStyle = {
      fontSize: '1.14em',
      boxSizing: 'border-box',
      borderRadius: '4px',
      display: 'flex',
      height: '2.8em',
      backgroundColor: '#fff',
      border: '1px solid rgba(0,0,0,0.15)',
      boxShadow: '0 2px 3px rgba(0,0,0,0.06)',
      paddingLeft: '.75em',
      paddingRight: '0.05em',

    };

    const inputStyle = {
      fontSize: '2em',
      fontWeight: 'normal',
      display: 'block',
      width: '100%',
      background: 'none',
      outline: 'none',
      border: 'none',
      padding: '0',
      height: '3.5em',
      zIndex: '1',
      top: '-1px',
      color: '#222',
      textRendering: 'auto',
      letterSpacing: 'normal',
      wordSpacing: 'normal',
      textTransform: 'none',
      textIndent: '0px',
      textShadow: 'none',
      textAlign: 'left',
      cursor: 'text',
      margin: '0em',
      font: '400 13.3333px Arial',
    };

    const input2Style = {
      display: 'block',
      minWidth: '26px',
      color: '#999',
      fontSize: '1.25em',
      border: 'none',
      height: 'auto',
      minHeight: '1.8em',
      lineHeight: '1.5',
      backgroundColor: 'transparent',
      backgroundRepeat: 'no-repeat',
    };

    const inputSearch = {
      display: 'block',
      width: '100%',
      color: 'white',
      fontSize: '1.25em',
      border: 'none',
      height: 'auto',
      minHeight: '1.8em',
      lineHeight: '1.5',
      backgroundColor: '#5b9e4d',
      backgroundRepeat: 'no-repeat',
    };


    const divS = {
      display: 'flex',
      flexDirection: 'row',
    };


    return (

      <div style={divStyle}>
        <form style={formStyle}>
          <input onChange={this.setText} name="search" style={inputStyle} type="text" autoComplete="off" tabIndex="0" autoCapitalize="off" autoCorrect="off" />
          {input !== '' ? (
            <div style={divS}>
              <button value="X" className="fa fa-times" style={input2Style} onClick={this.clearText} tabIndex="0" type="button" label="Save" />
              <button className="fa fa-search" style={inputSearch} onClick={this.search} tabIndex="0" type="button" label="Save" />
            </div>
          ) : <button className="fa fa-search hover" tabIndex="0" type="button" label="Save" /> }
        </form>
      </div>
    );
  }
}
