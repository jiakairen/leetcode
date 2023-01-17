var minFlipsMonoIncr = function (s) {
  let leftOnes = 0; // number of 1s to the left of the index (inclusive)
  let rightZeros = Array.from(s).filter((num) => num === "0").length; // number of 0s to the right of the index (exclusive)
  let currentMin = Math.min(rightZeros, s.length - rightZeros); // flipping to all 0s or all 1s

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];

    // if the current is 0, decrease the number of 0s on the right (still to be walked)
    // if the current is not 0 (it's 1), increase the number of 1s on the left (already walked through)
    current === "0" ? rightZeros-- : leftOnes++;

    if (current === "0" && next === "1") {
      // whenever we reach "01", recalculate the number of flips needed
      // flip every 1 to 0 on the left and flip every 0 to 1 on the right.
      const flips = leftOnes + rightZeros;

      if (flips < currentMin) {
        currentMin = flips; // update latest mininum flips if lower
      }
    }
  }
  return currentMin;
};

console.log(minFlipsMonoIncr("00110"));
