import React, { Component } from "react";
import Tappable from "react-tappable";
import { DoNutChart } from "./charts/DoNutChart";

class Tapables extends Component {
  render() {
    // TODO get height and width from configurable
    const height = 600;
    const width = 600;
    const { tapButtons, events } = this.props;
    return (
      <div>
        <svg height={height} width={width}>
          <g transform={`translate(${width / 2},${height / 2})`}>
            <Tappable component="g" stopPropagation {...events}>
              <DoNutChart key={Math.random()} tapButtons={tapButtons} />
            </Tappable>
          </g>
        </svg>
      </div>
    );
  }
}

export default Tapables;
