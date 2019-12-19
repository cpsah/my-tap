import React from "react";
import * as d3 from "d3";
import { Slice } from "./Slice";
import PropTypes from "prop-types";

export const DoNutChart = props => {
  const { tapButtons } = props;

  // TODO siplify to draw equal slice
  const dataInner = tapButtons.map(item => (item.id * 5) / item.id);
  const pie = d3.pie()(dataInner);

  return <Slice key={tapButtons.id} pie={pie} tapButtons={tapButtons} />;
};

DoNutChart.propTypes = {
  tapButtons: PropTypes.object
};
