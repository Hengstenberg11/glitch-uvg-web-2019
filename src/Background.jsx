
import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Background(props) {
  const { children } = props;
  return (
    <div className="background">{ children }</div>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Background;
