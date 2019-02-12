import React from "react";

export default ({ matrix, update }) => {
  const handleChange = (i, j, e) => {
    const value = +e.target.value;
    const newMatrix = matrix;
    newMatrix[i][j] = value;
    update(newMatrix);
  };

  return (
    <div>
      {matrix.map((column, i) => {
        return (
          <tr>
            {column.map((row, j) => {
              return (
                <td>
                  <input
                    className="input"
                    value={row}
                    type="text"
                    onChange={e => handleChange(i, j, e)}
                  />
                </td>
              );
            })}
          </tr>
        );
      })}
    </div>
  );
};
