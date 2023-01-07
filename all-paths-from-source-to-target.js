// var allPathsSourceTarget = function (graph) {
//   const end = graph.length - 1;
//   const edges = [];
//   let paths = [];
//   let changeHappened = true;

//   // obtain all edges
//   for (let i = 0; i < graph.length; i++) {
//     const node = graph[i];
//     for (let j = 0; j < node.length; j++) {
//       edges.push([i, node[j]]);
//     }
//   }

//   // obtain all reachable paths from 0
//   paths = edges.filter((edge) => edge[0] === 0);
//   console.log("initial paths", paths);

//   while (changeHappened) {
//     changeHappened = false;
//     const mappedPaths = paths.map((path) => {
//       const currentEnd = path[path.length - 1];

//       if (currentEnd !== end) {
//         changeHappened = true;
//         const nextNodes = edges.filter((edge) => edge[0] === currentEnd);

//         const newPath = nextNodes.map((nextNode) => [
//           ...path.slice(0, path.length - 1),
//           ...nextNode,
//         ]);
//         return newPath;
//       } else {
//         return [path];
//       }
//     });

//     paths = [];
//     for (let k = 0; k < mappedPaths.length; k++) {
//       paths = [...paths, ...mappedPaths[k]];
//     }
//     console.log("mapped paths", mappedPaths);
//     // console.log(paths);
//   }
//   return paths;
// };

// Recursive solution
var allPathsSourceTarget = function (graph) {
  const output = [];

  function helper(currentPath = [0]) {
    let index = currentPath[currentPath.length - 1];

    if (index === graph.length - 1) {
      output.push(currentPath);
    }

    for (let i = 0; i < graph[index].length; i++) {
      const element = graph[index][i];
      helper([...currentPath, element]);
    }
  }
  helper();

  return output;
};

// allPathsSourceTarget([[1, 2], [3], [3], []]);
allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]);
