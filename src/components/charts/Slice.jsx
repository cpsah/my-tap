import React from "react";
import * as d3 from "d3";
import Path from "./Path";

export default props => {
  let { pie, tapButtons } = props;

  let interpolateInner = d3.interpolateRgb("#eaaf79", "#bc3358", "#abc123");

  return pie.map((slice, index) => {
    let sliceColor = interpolateInner(index / (pie.length - 1));
    //TODO get the radius configurable
    return (
      <Path
        radius={200}
        interpolate={interpolateInner}
        slice={slice}
        tapButton={tapButtons[index]}
        sliceColor={sliceColor}
      />
    );
  });
};
