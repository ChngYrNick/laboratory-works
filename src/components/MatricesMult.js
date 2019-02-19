import React, { Component } from "react";
import SelectSize from "./SelectSize";
import Matrix from "./Matrix";
import "./MatricesMult.scss";

class MatricesMult extends Component {
  constructor(props) {
    super(props);
    const columns = 3;
    const rows = 3;

    const newMatrix = () =>
      new Array(columns).fill(0).map(() => new Array(rows).fill(0));
    this.state = {
      matrixA: newMatrix(),
      matrixB: newMatrix(),
      matrixC: newMatrix()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleMatrixAChange = this.handleMatrixAChange.bind(this);
    this.handleMatrixBChange = this.handleMatrixBChange.bind(this);
    this.handleMatrixCChange = this.handleMatrixCChange.bind(this);
    this.performOperation = this.performOperation.bind(this);
  }

  handleMatrixAChange(matrix) {
    this.setState({ matrixA: matrix });
  }

  handleMatrixBChange(matrix) {
    this.setState({ matrixB: matrix });
  }

  handleMatrixCChange(matrix) {
    this.setState({ matrixC: matrix });
  }

  handleChange(config) {
    this.setState(config);
  }

  performOperation() {
    const { matrixA, matrixB } = this.state;
    const newMatrix = matrixA.map((column, i) =>
      column.map((row, j) => Number(row) * Number(matrixB[i][j]))
    );
    this.handleChange({ matrixC: newMatrix });
  }

  renderButton() {
    return (
      <button className="btn-submit" onClick={this.performOperation}>
        =
      </button>
    );
  }

  render() {
    const { matrixA, matrixB, matrixC } = this.state;
    return (
      <div className="content">
        <div className="toolbar">
          <SelectSize update={this.handleChange} matrix={matrixA} />
        </div>
        <div className="matrices">
          <Matrix matrix={matrixA} update={this.handleMatrixAChange} />
          <div>X</div>
          <Matrix matrix={matrixB} update={this.handleMatrixBChange} />
          {this.renderButton()}
          <Matrix matrix={matrixC} update={this.handleMatrixCChange} />
        </div>
      </div>
    );
  }
}

export default MatricesMult;
