import React from "react";
import "./Matrix.scss";

export default ({ matrix, update }) => {
  const handleChange = (i, j, e) => {
    const value = e.target.value.toString();
    const newMatrix = matrix;
    newMatrix[i][j] = value;
    update(newMatrix);
  };

  return (
    <table>
      <tbody>
        {matrix.map((column, i) => {
          return (
            <tr key={i}>
              {column.map((row, j) => {
                return (
                  <td key={j}>
                    <input
                      className="input"
                      value={row}
                      type="text"
                      maxLength="8"
                      onChange={e => handleChange(i, j, e)}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
