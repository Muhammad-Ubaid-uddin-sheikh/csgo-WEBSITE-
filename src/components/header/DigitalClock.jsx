import React, { Component } from 'react';
class DigitalClock extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hours: 2,
        minutes: 0,
        seconds: 0,
      };
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => this.updateTime(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    updateTime() {
      if (this.state.hours === 0 && this.state.minutes === 0 && this.state.seconds === 0) {
        clearInterval(this.timerID);
        return;
      }
      
      let hours = this.state.hours;
      let minutes = this.state.minutes;
      let seconds = this.state.seconds;
  
      if (seconds === 0) {
        if (minutes === 0) {
          hours--;
          minutes = 59;
        } else {
          minutes--;
        }
        seconds = 59;
      } else {
        seconds--;
      }
  
      this.setState({ hours, minutes, seconds });
    }
  
    render() {
      const { hours, minutes, seconds } = this.state;
  
      return (
        <div>
          
          <div className="clock">
            <span>{hours < 10 ? `0${hours}` : hours}</span> :
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span> :
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
          </div>
        </div>
      );
    }
  }
  
  export default DigitalClock;