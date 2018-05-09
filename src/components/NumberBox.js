import React, { Component } from 'react';


const NumberBox = (props) => (
  <div>
    <p>{props.countdown}</p>
    <p>{props.value}</p>
  </div>
)

export default NumberBox;