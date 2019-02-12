import React from "react";

export default ({ update, option }) => {
  const options = ["+", "-"];

  const handleChange = e => {
    const value = e.target.value.toString();
    update({
      operation: value
    });
  };

  return (
    <div>
      <select value={option} onChange={handleChange} className="select">
        {options.map(item => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
