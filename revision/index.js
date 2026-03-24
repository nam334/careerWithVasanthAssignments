//TWO SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// var twoSum = function (nums, target) {
//   let myMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let value = target - nums[i];
//     if (myMap.has(value)) {
//       return [myMap.get(value), i];
//     } else {
//       myMap.set(nums[i], i);
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
//TC - O(n) since we loop over each element of the array
//SC - O(n) since we are creating map of the size of array

//Assignment recap

// Question 1: ### **Uber | Machine Coding: Asynchronous Task Runner (Concurrency Limit)**

// **Question:** Imagine Uber is fetching data for 100 nearby drivers. To avoid hitting API rate
//  limits or crashing the browser with too many simultaneous requests, you must implement a
// "Batch Runner."

// Write a function `promiseAllWithConcurrencyLimit` that takes an array of "task functions"
// (functions that return a promise) and a limit `limit`. It should execute no more than `limit` tasks
// at any given time. As soon as one task finishes, the next one in the queue should start.

// /**
//  * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
//  * @param {number} limit - Maximum concurrent executions
//  */
// async function promiseAllWithConcurrencyLimit(tasks, limit) {
//   // TODO: Your implementation
//   let results = [],
//     completedTasks = 0,
//     currentIndex = 0;
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < limit; i++) runTasks();
//     async function runTasks() {
//       if (currentIndex === tasks.length) return;
//       let index = currentIndex;
//       let task = tasks[currentIndex];
//       try {
//         currentIndex++;
//         results[index] = { status: "fulfilled", value: await task() };
//       } catch (error) {
//         results[index] = { status: "rejected", reason: error };
//       } finally {
//         completedTasks++;
//         if (completedTasks < tasks.length) runTasks();
//         if (completedTasks === tasks.length) resolve(results);
//       }
//     }
//   });
// }

// // --- Input Data for Testing ---
// const createDriverTask = (id, delay) => () =>
//   new Promise((resolve) => {
//     console.log(` Fetching Driver ${id}...`);
//     setTimeout(() => {
//       console.log(` Driver ${id} loaded`);
//       resolve(`Data for Driver ${id}`);
//     }, delay);
//   });

// const tasks =;

// // If limit is 2, Task 1 and 2 start.
// // When Task 2 finishes at 0.5s, Task 3 starts immediately.
// promiseAllWithConcurrencyLimit(tasks, 2).then(results => {
//   console.log("All tasks completed:", results);
// });

// let arr = [1, [2, [3, 4]]];
// function customFlat(arr, depth = 1) {
//   // Your recursive implementation here
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i]) && depth > 0) {
//       results = [...results, ...customFlat(arr[i], depth - 1)];
//     } else {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// console.log(customFlat(arr, 1));

// Zeta | Technical Round: Deep Equality Utility
// Question: Implement isDeepEqual(obj1, obj2). This is essential in frontend development for optimizing re-renders in components where you only want to update if the data actually changed.

function isDeepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== typeof obj2) return false;
  if (obj1 === null || obj2 === null) return obj1 === obj2;
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  //will chk for objects now
  for (let [key, value] of Object.entries(obj1)) {
    if (!(key in obj2)) return false;
    else {
      if (!isDeepEqual(value, obj2[key])) return false;
    }
  }
  return true;
}

// // --- Test Cases ---
// const profileA = { name: "Vasanth", roles: ["admin", "mentor"], meta: { id: 1 } };
// const profileB = { name: "Vasanth", roles: ["admin", "mentor"], meta: { id: 1 } };
// const profileC = { name: "Vasanth", roles: ["admin"], meta: { id: 1 } };

// console.log("Test 1 (Identical):", isDeepEqual(profileA, profileB)); // Expected: true
// console.log("Test 2 (Different Roles):", isDeepEqual(profileA, profileC)); // Expected: false
// console.log("Test 3 (Nested Change):", isDeepEqual(profileA, {...profileB, meta: { id: 2 } })); // Expected: false
// console.log("Test 4 (Primitive):", isDeepEqual(10, 10)); // Expected: true
