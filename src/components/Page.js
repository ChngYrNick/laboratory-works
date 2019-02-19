import React, { Component } from "react";
import AddSubMatrices from "./AddSubMatrices";
import MatricesMult from "./MatricesMult";
import InvertibleMatrix from "./InvertibleMatrix";
import TransposeMatrix from "./TransposeMatrix";
import ScalarMultiplication from "./ScalarMultiplication";

import "./Page.scss";

const events = [
  "Cкладання/Віднімання матриць",
  "Множення матриці на скаляр",
  "Множення матриць",
  "Транспонування матриці",
  "Знаходження оберненої матриці"
];

class Page extends Component {
  constructor(props) {
    super(props);

    // eslint-disable-next-line
    this.props.setEvent(events[0]);
  }

  onBtnClick = e => {
    const newEvent = e.currentTarget.innerText;
    // eslint-disable-next-line
    this.props.setEvent(newEvent);
  };

  renderButtons = () => {
    return events.map((item, index) => {
      return (
        <div className="wrapper">
          <button key={index} className="btn" onClick={this.onBtnClick}>
            {item}
          </button>
        </div>
      );
    });
  };

  renderComponent = () => {
    const { event } = this.props;
    switch (event) {
      case events[0]:
        return <AddSubMatrices />;
      case events[1]:
        return <ScalarMultiplication />;
      case events[2]:
        return <MatricesMult />;
      case events[3]:
        return <TransposeMatrix />;
      case events[4]:
        return <InvertibleMatrix />;
      default:
        break;
    }
    return null;
  };

  render() {
    return (
      <div>
        <div className="main">{this.renderComponent()}</div>
        <div className="footer">{this.renderButtons()}</div>
      </div>
    );
  }
}

export default Page;
