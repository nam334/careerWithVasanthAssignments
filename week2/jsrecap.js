// Swiggy | Machine Coding: Recursive Array Flattening
// Question: Implement a polyfill for Array.prototype.flat().
// Your implementation must handle the depth argument correctly.

const nestedData = [2, [7, [8]]];

// /**
//  * @param {Array} arr
//  * @param {number} depth
//  */
function customFlat(arr, depth = 1) {
  let result = [];
  // Your recursive implementation here
  if (depth === 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) result.push(arr[i]);
    else {
      let val = customFlat(arr[i], depth - 1);
      result.push(...val);
    }
  }
  return result;
}

console.log(customFlat(nestedData, 1));
// [3, [7, 8]]
// console.log(customFlat(nestedData, 2)); // [7, 8]
// console.log(customFlat(nestedData, Infinity)); // [9, 10, 11, 7, 8, 12]
