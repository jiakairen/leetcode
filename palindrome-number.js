var isPalindrome = function (x) {
  // convert int to string
  const number = x.toString();

  // loop over string from front and back at the same time
  for (let i = 0; i < Math.floor(number.length / 2); i++) {
    // compare the pair
    // return false when pair doesn't match
    if (number[i] !== number[number.length - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome(121));
