export default function floydMethod(Graph) {
  let mincircle = Infinity;
  let Dist = Graph;

  for (let k = 0; k < Graph.length; ++k) {
    //新增部分:
    for (let i = 0; i < k; ++i)
      for (let j = 0; j < i; ++j)
        mincircle =
          mincircle < Dist[i][j] + Graph[j][k] + Graph[k][i]
            ? mincircle
            : Dist[i][j] + Graph[j][k] + Graph[k][i];
    //通常的 floyd 部分:
    for (let i = 0; i < Graph.length; ++i)
      for (let j = 0; j < i; ++j) {
        let temp = Dist[i][k] + Dist[k][j];
        if (temp < Dist[i][j]) Dist[i][j] = Dist[j][i] = temp;
      }
  }

  return mincircle;
}
