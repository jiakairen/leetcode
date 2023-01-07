var validPath = function (n, edges, source, destination) {
  if (n === 1 && edges.length === 0) {
    return true;
  }
  let nextValues = [source];
  let nextNodes = edges;

  while (nextValues.length > 0) {
    console.log(nextValues);
    // find all connections to source node
    let arrivableNodes = nextNodes.filter((pair) => {
      if (nextValues.includes(pair[0]) || nextValues.includes(pair[1])) {
        return pair;
      }
    });
    console.log(arrivableNodes);

    // the remaining connections
    nextNodes = nextNodes.filter((pair) => {
      if (!nextValues.includes(pair[0]) && !nextValues.includes(pair[1])) {
        return pair;
      }
    });
    console.log(nextNodes);

    let testValues = nextValues;
    nextValues = [];

    for (let i = 0; i < arrivableNodes.length; i++) {
      const a = arrivableNodes[i][0];
      const b = arrivableNodes[i][1];
      if (a === destination || b === destination) {
        return true;
      }
      if (testValues.includes(a)) {
        nextValues.push(b);
      } else {
        nextValues.push(a);
      }
    }
  }
  return false;
};

// var validPath = function (n, edges, source, destination) {
//   const paths = uniquePaths(n, edges);
//   for (let i = 0; i < paths.length; i++) {
//     const path = paths[i];
//     if (path.has(source) && path.has(destination)) return true;
//   }
//   return false;
// };

// const uniquePaths = (n, edges) => {
//   if (n === 1) {
//     return [new Set().add(0)];
//   }
//   let uniquePaths = [new Set().add(edges[0][0]).add(edges[0][1])];
//   let found = false;

//   for (let i = 1; i < edges.length; i++) {
//     found = false;
//     const edge = edges[i];

//     for (let j = 0; j < uniquePaths.length; j++) {
//       if (uniquePaths[j].has(edge[0])) {
//         uniquePaths[j].add(edge[1]);
//         found = true;
//         continue;
//       } else if (uniquePaths[j].has(edge[1])) {
//         uniquePaths[j].add(edge[0]);
//         found = true;
//         continue;
//       }
//     }

//     if (!found) {
//       uniquePaths = [...uniquePaths, new Set().add(edge[0]).add(edge[1])];
//     }
//   }
//   return uniquePaths;
// };

console.log(
  validPath(
    10,
    [
      [0, 7],
      [0, 8],
      [6, 1],
      [2, 0],
      [0, 4],
      [5, 8],
      [4, 7],
      [1, 3],
      [3, 5],
      [6, 5],
    ],
    7,
    5
  )
);
