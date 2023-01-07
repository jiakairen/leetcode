var permute = function (nums) {
  const output = [];

  function permuteRecursive(nums, soFar = []) {
    if (soFar.length === nums.length) {
      output.push([...soFar]);
      return;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (!soFar.includes(nums[i])) {
          soFar = [...soFar, nums[i]];
          console.log(soFar);
          permuteRecursive(nums, soFar);
          soFar.pop();
        }
      }
    }
  }

  permuteRecursive(nums);
  return output;
};
console.log("output", permute([1, 2, 3, 4]));
