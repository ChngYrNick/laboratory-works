import React, { Component } from "react";
import SelectSize from "./SelectSize";
import Matrix from "./Matrix";
import "./ScalarMultiplication.scss";

class ScalarMultiplication extends Component {
  constructor(props) {
    super(props);
    const columns = 3;
    const rows = 3;

    const newMatrix = () =>
      new Array(columns).fill(0).map(() => new Array(rows).fill(0));
    this.state = {
      matrixA: newMatrix(),
      matrixB: newMatrix(),
      scalar: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleMatrixAChange = this.handleMatrixAChange.bind(this);
    this.handleMatrixBChange = this.handleMatrixBChange.bind(this);
    this.performOperation = this.performOperation.bind(this);
  }

  handleMatrixAChange(matrix) {
    this.setState({ matrixA: matrix });
  }

  handleMatrixBChange(matrix) {
    this.setState({ matrixB: matrix });
  }

  handleChange(config) {
    this.setState(config);
  }

  performOperation() {
    const { matrixA, scalar } = this.state;
    let newMatrix = matrixA.map(column => column.map(raw => Number(raw)));
    newMatrix = newMatrix.map(column => column.map(row => row * scalar));
    this.handleChange({ matrixB: newMatrix });
  }

  renderButton() {
    return (
      <button className="btn-submit" onClick={this.performOperation}>
        =
      </button>
    );
  }

  render() {
    const { matrixA, matrixB, scalar } = this.state;
    return (
      <div className="content">
        <div className="toolbar">
          <SelectSize update={this.handleChange} matrix={matrixA} />
        </div>
        <div className="matrices">
          <Matrix matrix={matrixA} update={this.handleMatrixAChange} />
          <div>X</div>
          <input
            className="scalar-input"
            value={scalar}
            type="text"
            maxLength="8"
            onChange={e => {
              const value = e.target.value.toString();
              return this.handleChange({ scalar: value });
            }}
          />
          {this.renderButton()}
          <Matrix matrix={matrixB} update={this.handleMatrixBChange} />
        </div>
      </div>
    );
  }
}

export default ScalarMultiplication;
