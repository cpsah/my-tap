import React, { Component } from "react";
import * as d3 from "d3";

class Path extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };
  }

  onMouseOver = () => {
    this.setState({
      isHovered: true
    });
  };

  onMouseOut = () => {
    this.setState({
      isHovered: false
    });
  };

  // TODO Handle through arc pi d
  getAxis = d => {
    let dArr = d.substring(1);
    dArr = dArr.split("A");
    const dxy = dArr[0].split(",");
    return {
      dx: dxy[0],
      dy: dxy[1]
    };
  };

  render() {
    let { radius, slice, sliceColor, tapButton } = this.props;

    const outerRadius = this.state.isHovered ? radius * 1.1 : radius;
    const innerRadius = radius * 0.6;

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(0.03)
      .cornerRadius(2);

    const { dx, dy } = this.getAxis(arc(slice));
    const transform = `translate(${dx},${dy})`;

    return (
      <g>
        <path
          d={arc(slice)}
          fill={sliceColor}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          {tapButton.value}
        </path>
        <text
          transform={transform}
          className="arcSlide"
          dy=".35em"
          textAnchor="middle"
        >
          {tapButton.id}
        </text>
      </g>
    );
  }
}

export default Path;
