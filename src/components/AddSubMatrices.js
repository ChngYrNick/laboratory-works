import React, { Component } from "react";
import SelectSize from "./SelectSize";
import SelectOperation from "./ SelectOperation";
import Matrix from "./Matrix";

class AddSubMatrices extends Component {
  constructor(props) {
    super(props);
    const columns = 3;
    const rows = 3;
    this.state = {
      matrixA: new Array(columns).fill(0).map(() => new Array(rows).fill(0)),
      matrixB: new Array(columns).fill(0).map(() => new Array(rows).fill(0)),
      matrixC: new Array(columns).fill(0).map(() => new Array(rows).fill(0)),
      operation: "+"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleMatrixAChange = this.handleMatrixAChange.bind(this);
    this.handleMatrixBChange = this.handleMatrixBChange.bind(this);
    this.handleMatrixCChange = this.handleMatrixCChange.bind(this);
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

  performOperation(e) {
    const value = e.currentTarget.innerText;
    console.log(value);
    const { matrixA, matrixB } = this.state;
    let newMatrix;
    if (value === "+") {
      newMatrix = matrixA.map((column, i) =>
        column.map((row, j) => row + matrixB[i][j])
      );
    }
    if (value === "-") {
      newMatrix = matrixA.map((column, i) =>
        column.map((row, j) => row - matrixB[i][j])
      );
    }
    this.handleChange({
      matrixC: newMatrix
    });
  }

  renderButton() {
    const { operation } = this.state;
    return <button onClick={this.performOperation}>{operation}</button>;
  }

  render() {
    const { matrixA, matrixB, matrixC, operation } = this.state;
    return (
      <div>
        <Matrix matrix={matrixA} update={this.handleMatrixAChange} />
        <Matrix matrix={matrixB} update={this.handleMatrixBChange} />
        <Matrix matrix={matrixC} update={this.handleMatrixCChange} />
        <SelectSize update={this.handleChange} matrix={matrixA} />
        <SelectOperation update={this.handleChange} option={operation} />
        {this.renderButton()}
      </div>
    );
  }
}

export default AddSubMatrices;
