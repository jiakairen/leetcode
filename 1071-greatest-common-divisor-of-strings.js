var gcdOfStrings = function (str1, str2) {
  let numerator = str1;
  let denominator = str2;
  let gcd = "";

  if (str1.length < str2.length) {
    [numerator, denominator] = [str2, str1];
  }

  function helper(numLen, denLen, num, den, test = den) {
    if (test.length < 1) {
      return;
    }

    let top = numLen;
    let btm = denLen;
    let rem = top % btm;
    while (rem !== 0) {
      [top, btm, rem] = [btm, rem, top % btm];
    }
    // gcd is btm

    test = den.substring(0, btm);
  }

  helper(numerator.length, denominator.length, numerator, denominator);

  return gcd;
};

console.log(gcdOfStrings("ABCABC", "ABC"));
