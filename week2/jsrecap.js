//Largest consequtive sequence

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums = nums.sort((a, b) => a - b);
  let myset = new Set(nums);
  let newArr = [...myset];
  if (newArr.length === 1) return 1;
  console.log("newarr is", newArr);
  let j = 0,
    count = 1,
    max = 1;
  while (j < newArr.length) {
    if (newArr[j] + 1 === newArr[j + 1]) {
      count++;
      max = Math.max(max, count);
    } else count = 1;
    j++;
  }
  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
