import React from "react";
import {pie} from "d3-shape";
import { Slice } from "./Slice";
import PropTypes from "prop-types";

export const DoNutChart = props => {
  const { tapButtons } = props;

  // TODO siplify to draw equal slice
  const dataInner = tapButtons.map(item => (item.id * 5) / item.id);
  const cPie = pie()(dataInner);

  return <Slice key={tapButtons.id} pie={cPie} tapButtons={tapButtons} />;
};

DoNutChart.propTypes = {
  tapButtons: PropTypes.object
};
