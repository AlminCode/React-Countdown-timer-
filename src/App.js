import React, { Component } from 'react';
import './App.css';
import Countdown from './components/Countdown'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: 'June, 15, 2018' };
    this.onChangeDate = this.onChangeDate.bind(this);
}


onChangeDate(e){
  console.log(e.target.value)
  var date = e.target.value
  this.setState({deadline: date})
}

  render() {
    return (
      <div className="App">
        <div>
          <input type="date" onChange={this.onChangeDate}></input>
        </div>
        <Countdown deadline={ this.state.deadline }/>
      </div>
    );
  }
}

export default App;