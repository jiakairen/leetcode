var minFlipsMonoIncr = function (s) {
  let leftOnes = 0;
  let rightZeros = Array.from(s).filter((num) => num === "0").length;
  let currentMin = Math.min(rightZeros, s.length - rightZeros);

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];

    current === "0" ? rightZeros-- : leftOnes++;

    if (current === "0" && next === "1") {
      const flips = leftOnes + rightZeros;
      if (flips < currentMin) {
        currentMin = flips;
      }
    }
  }
  return currentMin;
};

console.log(minFlipsMonoIncr("00110"));
