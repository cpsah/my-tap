import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Tapables from "./components/tapables";
import tapButtons from "./data/tapButtons.json";
import config from "./config/api.js";

console.log(config);
const apiURL = `${config.url}/log-events`;
class App extends Component {
  constructor () {
    super();
    this.state = {
      tapButtons,
      events: {
        onTap: this.handleEvent.bind(this, "tap"),
        onPress: this.handleEvent.bind(this, "press"),
        onTouchStart: this.handleEvent.bind(this, "touchStart"),
        onTouchEnd: this.handleEvent.bind(this, "touchEnd"),
        onMouseDown: this.handleEvent.bind(this, "mouseDown"),
        onMouseUp: this.handleEvent.bind(this, "mouseUp"),
        onMouseOut: this.handleEvent.bind(this, "mouseOut"),
        onKeyDown: this.handleEvent.bind(this, "keyDown"),
        onKeyUp: this.handleEvent.bind(this, "keyUp")
      },
      triggeredEvents: []
    };
  }

  handleEvent = (name, event) => {
    let eventsList = [];
    eventsList.push(`${name} - ${event.target.innerHTML}`);
    this.setState({
      triggeredEvents: event.target.innerHTML
    });

    this.callAPI(eventsList);
  };

  callAPI(actionData) {
    axios
      .post(apiURL, {
        data: actionData
      })
      .then(res => {
        const response = res.data ? res.data : "No Data Found";
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="chart-section">
          { this.renderChartBlock() }
          { this.renderTriggeredEvents() }
        </div>
      </div>
    );
  }
  renderChartBlock() {
    return (
      <div className="chart-block">
        <Tapables
          tapButtons={ this.state.tapButtons }
          events={ this.state.events }
        />
      </div>
    );
  }
  renderTriggeredEvents() {
    return (
      <div className="event-log-block">
        <div className="event-log-block-content">
          <h3>Event log:</h3>
          <div ref="eventLog" className="event-log">
            <div>{ this.state.triggeredEvents }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
