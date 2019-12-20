import React, { Component } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

class Path extends Component {
  constructor (props) {
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

  render () {
    const { radius, slice, sliceColor, tapButton } = this.props;

    const outerRadius = this.state.isHovered ? radius * 1.1 : radius;
    const innerRadius = radius * 0.6;

    const cArc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(0.02)
      .cornerRadius(2);

    const cxy = cArc.centroid(slice);

    return (
      <g>
        <path
          d={cArc(slice)}
          fill={sliceColor}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onTouchStart={this.onMouseOver}
          onTouchMove={this.onMouseOver}
        >
          {tapButton.value}
        </path>
        <text
          className="arcSlide"
          x={cxy[0]}
          y={cxy[1]}
          textAnchor="middle"
        >
          {tapButton.id}
        </text>
      </g>
    );
  }
}

Path.propTypes = {
  tapButton: PropTypes.object,
  radius: PropTypes.number,
  slice: PropTypes.number,
  sliceColor: PropTypes.string
};

export default Path;
