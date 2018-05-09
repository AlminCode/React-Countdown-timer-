import React, { Component } from "react";
import NumberBox from '../components/NumberBox'
import styled from 'styled-components';
import i18n from '../i18n'

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      lng: 'en'
    };
    this.days = i18n.t('days.label')
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

  changeLanguage(){
    i18n.changeLanguage('en', (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      t('key'); // -> same as i18next.t
    });
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
      const month = Math.floor(time / (1000 * 60 * 60 * 24 * 30));
      this.setState({ days, hours, minutes, seconds });
    }
  }

  render() {
  const StyledDiv = styled.div `
    border:1px solid;
    width:100px;
    height: 100px;
    float: left;
  `;

  const CenterDiv = styled.div `
    display: inline-block;
    height: 90px;
    line-height: 90px;
    text-align: center;
  `;
  
  

    return (
      <CenterDiv>
        <StyledDiv>
          <NumberBox countdown={this.leading0(this.state.days)} value={this.days}></NumberBox>
        </StyledDiv>

        <StyledDiv>
          <NumberBox countdown={this.leading0(this.state.hours)} value="Hours"></NumberBox>
        </StyledDiv>

        <StyledDiv>
          <NumberBox countdown={this.leading0(this.state.minutes)} value="Minutes"></NumberBox>
        </StyledDiv>

        <StyledDiv>
          <NumberBox countdown={this.leading0(this.state.seconds)} value="Seconds"></NumberBox>
        </StyledDiv>
        {/* <StyledDiv>
          <NumberBox countdown={this.leading0(this.state.month)} value="Month"></NumberBox>
        </StyledDiv> */}
      </CenterDiv>
    );
  }
}
export default Countdown;
