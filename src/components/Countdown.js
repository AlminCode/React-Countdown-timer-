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
      month: 0,
      lng: 'en'
    }; 
    this.onLanguageChanged = this.onLanguageChanged.bind(this);
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  add0(num) {
    return num < 10 ? "0" + num : num;
  }

  onLanguageChanged(e) {
    var lang = e.target.value.toLowerCase();

    this.setState({lng: lang});
    i18n.changeLanguage(lang);

    this.forceUpdate();
  }

  daysInMonth(month, year){
    return new Date(year, month, 0).getDate();
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log(new Date(deadline).getMonth())
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      let days = Math.floor(time / (1000 * 60 * 60 * 24));
      const month = Math.floor(time / (1000 * 60 * 60 * 24 * 30));

      if (month > 0){
         days = days - this.daysInMonth(new Date(deadline).getMonth(), new Date(deadline).getFullYear()) 
      }
      this.setState({ month, days, hours, minutes, seconds });
    }
  }

  render() {
  const StyledDiv = styled.div `
    border:1px solid;
    width:80px;
    height: 80px;
    float: left;
    margin-left: 10px;
    font-weight: bold;
  `;

  const CenterDiv = styled.div `
    display: inline-block;
    height: 90px;
    line-height: 22px;
    text-align: center;
  `;

  const StartsIn = styled.div `
  text-align: left;
  margin-left: 10px;
  `;
  
    return (
      <CenterDiv>
        <div>
          <p>{i18n.t('toggle.label')}</p>
          <input  onClick={(e) => this.onLanguageChanged(e)} type="button" value="EN"></input>
          <input  onClick={(e) => this.onLanguageChanged(e)} type="button" value="DE"></input>
        </div>
        
        <StartsIn>{i18n.t('start.label')}</StartsIn>
        <StyledDiv>
          <NumberBox countdown={this.add0(this.state.month)} value={i18n.t('months.label')}></NumberBox>
        </StyledDiv>

        <StyledDiv> 
          <NumberBox countdown={this.add0(this.state.days)} value={i18n.t('days.label')}></NumberBox>
        </StyledDiv>

        <StyledDiv>
          <NumberBox countdown={this.add0(this.state.hours)} value={i18n.t('hours.label')}></NumberBox>
        </StyledDiv>

        <StyledDiv>
          <NumberBox countdown={this.add0(this.state.minutes)} value={i18n.t('minutes.label')}></NumberBox>
        </StyledDiv>

        <StyledDiv>
          <NumberBox countdown={this.add0(this.state.seconds)} value={i18n.t('seconds.label')}></NumberBox>
        </StyledDiv>
      </CenterDiv>
    );
  }

  
}
export default Countdown;
