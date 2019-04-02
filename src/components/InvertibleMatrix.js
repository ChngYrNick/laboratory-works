import React, { Component } from "react";
import SelectSize from "./SelectSize";
import Matrix from "./Matrix";
import "./MatricesMult.scss";
import { InverseMatrix, Determinant } from "../functions/matrixOperations";

class InvertibleMatrix extends Component {
  constructor(props) {
    super(props);
    const columns = 3;
    const rows = 3;

    const newMatrix = () =>
      new Array(columns).fill(0).map(() => new Array(rows).fill(0));
    this.state = {
      matrixA: newMatrix(),
      matrixB: newMatrix()
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
    const { matrixA } = this.state;
    if (matrixA.length !== matrixA[0].length) {
      alert("Matrix isn't square!");
      return;
    }
    if (!Determinant(matrixA)) {
      alert(
        "The inverse matrix cannot be found, since the determinant is zero"
      );
      return;
    }
    let newMatrix = matrixA.map(column => column.map(raw => Number(raw)));
    newMatrix = InverseMatrix(newMatrix).map(column =>
      column.map(raw => Math.round(raw * 100) / 100)
    );
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
    const { matrixA, matrixB } = this.state;
    return (
      <div className="content">
        <div className="toolbar">
          <SelectSize update={this.handleChange} matrix={matrixA} />
        </div>
        <div className="matrices">
          <Matrix matrix={matrixA} update={this.handleMatrixAChange} />
          {this.renderButton()}
          <Matrix matrix={matrixB} update={this.handleMatrixBChange} />
        </div>
      </div>
    );
  }
}

export default InvertibleMatrix;
