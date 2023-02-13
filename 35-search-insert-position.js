var searchInsert = function (nums, target, index = 0) {
  console.log(nums, index);
  // Base case
  if (nums.length === 0) {
    return index;
  }

  // Calculate mid index
  const midIndex = Math.floor(nums.length / 2);

  // Slicing arrays
  const firstHalf = nums.slice(0, midIndex);
  const secondHalf = nums.slice(midIndex + 1);
  console.log(firstHalf, secondHalf);

  // Test if which half the target will be in
  if (target === nums[midIndex]) {
    return index + midIndex;
  } else if (target < nums[midIndex]) {
    console.log("here" + nums[midIndex]);
    return searchInsert(firstHalf, target, index);
  } else {
    index += midIndex + 1;
    return searchInsert(secondHalf, target, index);
  }
};

console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6, 7], 5));
