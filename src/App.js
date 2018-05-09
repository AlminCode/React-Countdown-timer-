import React, { Component } from 'react';
import './App.css';
import Countdown from './components/Countdown'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: 'May, 15, 2018' };
}

  render() {
    return (
      <div className="App">
        <div className="App-date">
          {this.state.deadline}
        </div>
        <Countdown deadline={ this.state.deadline }/>
      </div>
    );
  }
}

export default App;