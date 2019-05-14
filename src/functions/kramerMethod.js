import math from "mathjs";

const kramerMethod = (A, C) => {
  const delta = math.det(A.slice());
  const deltaArr = [];

  for (let i = 0; i < A.length; i++) {
    let arr = A.slice();
    for (let j = 0; j < C.length; j++) {
      arr[j][i] = C[j];
    }
    deltaArr.push(math.det(arr.slice()));
  }

  return deltaArr.map(val => Math.round((val / delta) * 1000) / 1000);
};

export default kramerMethod;
