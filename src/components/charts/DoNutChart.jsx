import React from "react";
import * as d3 from "d3";
import Slice from "./Slice";

export const DoNutChart = props => {
  const { tapButtons } = props;

  // TODO siplify to draw equal slice
  const dataInner = tapButtons.map(item => (item.id * 5) / item.id);
  let pie = d3.pie()(dataInner);

  return <Slice key={tapButtons.id} pie={pie} tapButtons={tapButtons} />;
};
