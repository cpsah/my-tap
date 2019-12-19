import { createStore } from "redux";
import { tapButtons } from "../data/tapButtons";

export const store = createStore(function (state = tapButtons, action) {
  return state;
});
