import React, { Component } from "react";

import "./Page.scss";

class Page extends Component {
  onBtnClick = e => {
    const newEvent = e.currentTarget.innerText;
    // eslint-disable-next-line
    this.props.setEvent(newEvent);
  };

  renderButtons = () => {
    const events = [
      "Складання матриць",
      "Множення матриці на скаляр",
      "Множення матриць",
      "Транспонування матриці",
      "Знаходження оберненої матриці"
    ];

    return events.map((item, index) => {
      return (
        <button key={index} className="btn" onClick={this.onBtnClick}>
          {item}
        </button>
      );
    });
  };

  render() {
    return <div className="page">{this.renderButtons()}</div>;
  }
}

export default Page;
