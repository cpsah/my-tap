import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import Path from "./Path";

export const Slice = props => {
  const { pie, tapButtons } = props;

  const interpolateInner = d3.interpolateRgb("#eaaf79", "#bc3358", "#abc123");

  return pie.map((slice, index) => {
    const sliceColor = interpolateInner(index / (pie.length - 1));
    // TODO get the radius configurable
    return (
      <Path
        key={slice[index]}
        radius={200}
        interpolate={interpolateInner}
        slice={slice}
        tapButton={tapButtons[index]}
        sliceColor={sliceColor}
      />
    );
  });
};

Slice.propTypes = {
  tapButtons: PropTypes.object,
  pie: PropTypes.object
};
