// var minStoneSum = function (piles, k) {
//   const sortedPiles = piles.sort((a, b) => (a > b ? -1 : 1));
//   console.log(sortedPiles);
//   while (k > 0) {

//     sortedPiles[0] = Math.ceil(sortedPiles[0] / 2);

//     if (sortedPiles[1] > sortedPiles[0]) {
//       console.log(sortedPiles);
//       const first = sortedPiles.shift();

//       for (let i = 0; i < sortedPiles.length; i++) {
//         if (sortedPiles[i + 1] === undefined) {
//           sortedPiles.push(first);
//           break;
//         } else if (sortedPiles[i + 1] < first) {
//           console.log("here");
//           console.log(sortedPiles[i + 1], first);
//           sortedPiles.splice(i + 1, 0, first);
//           console.log(sortedPiles);
//           break;
//         }
//       }
//     }
//     console.log(sortedPiles);
//     k--;
//   }
//   return sortedPiles.reduce((a, b) => a + b);
// };

// var minStoneSum = function (piles, k) {
//   let sortedPiles = piles;
//   let storedValues = [];

//   if (piles.reduce((a, b) => a + b) === piles.length) return piles.length;

//   while (k > 0) {
//     sortedPiles = sortedPiles.sort((a, b) => a - b);
//     let halfValue = Math.ceil(sortedPiles.pop() / 2);
//     storedValues.push(halfValue);

//     k--;
//     while (sortedPiles[sortedPiles.length - 1] > storedValues[0]) {
//       if (k === 0) {
//         break;
//       }
//       storedValues.push(Math.ceil(sortedPiles.pop() / 2));
//       k--;
//     }
//     sortedPiles = [...storedValues, ...sortedPiles];
//     storedValues = [];
//   }
//   return sortedPiles.reduce((a, b) => a + b);
// };

var minStoneSum = function (piles, k) {
  let sortedPiles = piles;
  let halved = [];

  if (piles.reduce((a, b) => a + b) === piles.length) return sortedPiles.length;

  while (k > 0) {
    sortedPiles = sortedPiles.sort((a, b) => b - a);
    let halfValue = Math.ceil(sortedPiles.shift() / 2);
    halved.push(halfValue);
    k--;
    while (sortedPiles[0] > halved[0]) {
      if (k === 0) {
        break;
      }
      halved.push(Math.ceil(sortedPiles.shift() / 2));
      k--;
    }
    sortedPiles = [...halved, ...sortedPiles];
    halved = [];
  }
  return sortedPiles.reduce((a, b) => a + b);
};

console.log(minStoneSum([5, 4, 9], 2));
console.log(minStoneSum([4, 3, 6, 7], 3));
console.log(minStoneSum([4122, 9928, 3477, 9942], 6));
console.log(minStoneSum([2695, 9184, 2908, 3869, 3779, 391, 2896, 5328], 10));
