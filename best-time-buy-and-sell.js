// var maxProfit = function (prices) {
//   const profitArray = [];
//   let currentBuy = Infinity;
//   let buyIndex = null;
//   let currentSell = -Infinity;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < currentBuy) {
//       currentBuy = prices[i];
//       buyIndex = i;
//       if (i === prices.length - 1) return false;
//     } else if (prices[i] > currentBuy) {
//       break;
//     }

//     console.log(currentBuy, currentSell);
//   }
//   for (let j = buyIndex + 1; j < prices.length; j++) {
//     if (prices[j] > currentSell) {
//       currentSell = prices[j];
//     }
//     console.log(currentBuy, currentSell);
//   }
//   return currentSell - currentBuy;
// };

var maxProfit = function (prices) {
  const profitArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log("---------------------------");
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log("---------------------------");
console.log(maxProfit([2, 4, 1]));
console.log("---------------------------");
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
