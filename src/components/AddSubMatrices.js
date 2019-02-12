import React, { Component } from "react";
import SelectSize from "./SelectSize";
import Matrix from "./Matrix";

class AddSubMatrices extends Component {
  constructor(props) {
    super(props);
    const columns = 3;
    const rows = 3;
    const matrix = new Array(columns)
      .fill(0)
      .map(() => new Array(rows).fill(0));
    this.state = {
      matrixA: matrix,
      matrixB: matrix,
      matrixC: matrix
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleMatrixAChange = this.handleMatrixAChange.bind(this);
    this.handleMatrixBChange = this.handleMatrixBChange.bind(this);
    this.handleMatrixCChange = this.handleMatrixCChange.bind(this);
  }

  handleMatrixAChange(matrixA) {
    this.setState({ matrixA });
  }

  handleMatrixBChange(matrixB) {
    this.setState({ matrixB });
  }

  handleMatrixCChange(matrixC) {
    this.setState({ matrixC });
  }

  handleSizeChange(config) {
    this.setState(config);
  }

  render() {
    const { matrixA, matrixB, matrixC } = this.state;
    return (
      <div>
        <Matrix matrix={matrixA} update={this.handleMatrixAChange} />
        <SelectSize update={this.handleSizeChange} matrix={matrixA} />
      </div>
    );
  }
}

export default AddSubMatrices;
