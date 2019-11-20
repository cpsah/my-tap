import React, { Component } from "react";
import Tappable from "react-tappable";

class Tapables extends Component {
  render() {
    const { tapButtons, events } = this.props;
    return (
      <div>
        {tapButtons.map(btns => {
          return (
            <Tappable
              key={btns.id}
              component="button"
              stopPropagation
              {...events}
            >
              {btns.value}
            </Tappable>
          );
        })}
      </div>
    );
  }
}

export default Tapables;
