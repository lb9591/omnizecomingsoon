import React, { Component } from "react";
import './countdown-style.css';

export class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date("Feb 15, 2021 21:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div className="container">
          <ul className="countdown">
                    <li>
                        <h3 className="c-title"><span className="days">{days}</span></h3>
                        <p className="days_text">days</p>
                    </li>
                    <li>
                        <h3 className="c-title"><span className="hours">{hours}</span></h3>
                        <p className="hours_text">hours</p>
                    </li>
                    <li>
                        <h3 className="c-title"><span className="minutes">{minutes}</span></h3>
                        <p className="minu_text">minutes</p>
                    </li>
                    <li>
                        <h3 className="c-title"><span className="seconds">{seconds}</span></h3>
                        <p className="seco_text">seconds</p>
                    </li>
                </ul>
                </div>

    );
  }
};
