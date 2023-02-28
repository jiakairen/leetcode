var majorityElement = function (nums) {
  const tally = {};
  for (let i = 0; i < nums.length; i++) {
    if (tally[nums[i]]) {
      tally[nums[i]]++;
    } else {
      tally[nums[i]] = 1;
    }
  }
  return Object.keys(tally).find((key) => tally[key] > nums.length / 2);
};
