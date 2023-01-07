var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let currentTotal = 0;
  let subTotal = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let nextChar = s[i + 1];

    if (romanValues[char] > romanValues[nextChar] || nextChar === undefined) {
      subTotal += romanValues[char];
      currentTotal += subTotal;
      subTotal = 0;
    } else if (romanValues[char] < romanValues[nextChar]) {
      currentTotal -= romanValues[char];
    } else {
      subTotal += romanValues[char];
    }
  }
  return currentTotal;
};

// var romanToInt = function (s) {
//   const romans = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (
//       /[IXC]/.test(s[i]) &&
//       /[VLDCMX]/.test(s[i + 1]) &&
//       romans[s[i + 1]] > romans[s[i]]
//     ) {
//       sum -= romans[s[i]];
//     } else {
//       sum += romans[s[i]];
//     }
//   }
//   return sum;
// };

console.log(romanToInt("DCXXI"));
