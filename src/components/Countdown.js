import React, { Component } from "react";
import NumberBox from '../components/NumberBox'
import styled from 'styled-components';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }



  render() {

const Title = styled.h1`
  color: red;
`;
    return (
      <div>
        <Title>Test</Title>
        <div className="Clock-days">
          <NumberBox countdown={this.leading0(this.state.days)} value="Days"></NumberBox>
        </div>
        <div className="Clock-hours">
          <NumberBox countdown={this.leading0(this.state.hours)} value="Hours"></NumberBox>
        </div>
        <div className="Clock-minutes">
          <NumberBox countdown={this.leading0(this.state.minutes)} value="Minutes"></NumberBox>
        </div>
        <div className="Clock-seconds">
          <NumberBox countdown={this.leading0(this.state.seconds)} value="Seconds"></NumberBox>
        </div>
      </div>
    );
  }
}
export default Countdown;
