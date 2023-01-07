var longestCommonPrefix = function (strs, index = 0, prefix = "") {
  // initialise empty set
  const count = new Set();

  // add the [index]th letter from each word to the set
  strs.forEach((e) => {
    count.add(e[index]);
  });

  // console.log("iteration", index, count);

  // Base cases
  if (count.size > 1 || !count.values().next().value) {
    // if the set has a size of > 1, it means the the [index]th letter of some words are now different
    // empty strings added into set will get turned into undefined because ""[0] = undefined
    return prefix;
  } else if (strs.length === 1) {
    // if the input is only one length long, return that string inside
    return strs[0];
  }

  return longestCommonPrefix(
    strs, // pass the original strs down
    index + 1, // increment index to access the next letter
    prefix + count.values().next().value // current prefix + current letter
  );
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car", "cat"]));
console.log(longestCommonPrefix(["", ""]));
