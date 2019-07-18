import React from 'react';

export default (props) => (
  <button
    onClick={props.handleButton}
  >
    {props.children}
  </button>
)