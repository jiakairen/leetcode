var partition = function (s) {
  const sLength = s.length;
  const output = [];

  function partitionRec(s, sofar = []) {
    if ((sofar.join("").length = sLength)) {
      output.push([...sofar]);
    }
    for (let i = 1; i < s.length; i++) {
      const sub = s.substring(0, i);
      if (isPalindrome(sub)) {
        sofar = [...sofar, sub];
      }
      partitionRec(s.substring(i), sofar);
      sofar = sofar.pop();
    }
  }
  partitionRec(s);

  function isPalindrome(x) {
    const number = x.toString();
    for (let i = 0; i < Math.floor(number.length / 2); i++) {
      if (number[i] !== number[number.length - i - 1]) return false;
    }
    return true;
  }
  return output;
};

console.log(partition("abc"));
console.log(partition("aaaab"));
