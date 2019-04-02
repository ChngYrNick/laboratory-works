import React from "react";
import "./SelectSize.scss";

export default ({ update, matrix }) => {
  const options = [2, 3, 4, 5, 6, 7];
  const columns = matrix.length;
  const rows = matrix[0].length;

  const resetMatrix = (newRows, newColumns) => {
    const newMatrix = () => {
      if (!newRows) {
        return new Array(newColumns).fill(0).map(() => new Array(rows).fill(0));
      }
      return new Array(columns).fill(0).map(() => new Array(newRows).fill(0));
    };
    update({
      matrixA: newMatrix(),
      matrixB: newMatrix(),
      matrixC: newMatrix()
    });
  };

  const handleRowsChange = e => {
    const value = +e.target.value;
    resetMatrix(value, null);
  };

  const handleColumnsChange = e => {
    const value = +e.target.value;
    resetMatrix(null, value);
  };

  return (
    <div className="size-selector">
      <div>
        <select
          value={columns}
          onChange={handleColumnsChange}
          className="select"
        >
          {options.map(item => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <select value={rows} onChange={handleRowsChange} className="select">
          {options.map(item => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};