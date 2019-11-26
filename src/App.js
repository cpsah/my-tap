import React, { Component } from "react";
import "./App.css";
import Tapables from "./components/tapables";
class App extends Component {
  constructor() {
    super();
    this.state = {
      tapButtons: [
        { id: 1, value: "Button-1" },
        { id: 2, value: "Button-2" },
        { id: 3, value: "Button-3" },
        { id: 4, value: "Button-4" },
        { id: 5, value: "Button-5" },
        { id: 6, value: "Button-6" },
        { id: 7, value: "Button-7" },
        { id: 8, value: "Button-8" },
        { id: 9, value: "Button-9" },
        { id: 10, value: "Button-10" }
      ],
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
    let eventsList = this.state.triggeredEvents;
    eventsList.push(`${name} - ${event.target.innerHTML}`);
    this.setState({
      triggeredEvents: eventsList
    });
  };

  render() {
    return (
      <div className="App">
        <div className="chart-section">
          {this.renderChartBlock()}
          {this.renderTriggeredEvents()}
        </div>
      </div>
    );
  }
  renderChartBlock() {
    return (
      <div className="chart-block">
        <Tapables
          tapButtons={this.state.tapButtons}
          events={this.state.events}
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
            {this.state.triggeredEvents.map((ev, i) => {
              return <div key={"e" + i}>{ev}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
