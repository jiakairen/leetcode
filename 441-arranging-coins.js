var arrangeCoins = function (n, depth = 0) {
  console.log(n, depth);
  if (n < 0) {
    return depth - 1;
  }
  return arrangeCoins(n - depth - 1, depth + 1);
};

console.log(arrangeCoins(0));
