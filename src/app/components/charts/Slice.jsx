import React from "react";
import PropTypes from "prop-types";
import {interpolateRgb} from "d3-interpolate";
import Path from "./Path";

export const Slice = props => {
  const { pie, tapButtons } = props;

  const interpolateInner = interpolateRgb("#eaaf79", "#bc3358");

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
