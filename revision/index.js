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

// function isDeepEqual(obj1, obj2) {
//   if (obj1 === obj2) return true;
//   if (typeof obj1 !== typeof obj2) return false;
//   if (obj1 === null || obj2 === null) return obj1 === obj2;
//   if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
//   //will chk for objects now
//   for (let [key, value] of Object.entries(obj1)) {
//     if (!(key in obj2)) return false;
//     else {
//       if (!isDeepEqual(value, obj2[key])) return false;
//     }
//   }
//   return true;
// }

// // --- Test Cases ---
// const profileA = { name: "Vasanth", roles: ["admin", "mentor"], meta: { id: 1 } };
// const profileB = { name: "Vasanth", roles: ["admin", "mentor"], meta: { id: 1 } };
// const profileC = { name: "Vasanth", roles: ["admin"], meta: { id: 1 } };

// console.log("Test 1 (Identical):", isDeepEqual(profileA, profileB)); // Expected: true
// console.log("Test 2 (Different Roles):", isDeepEqual(profileA, profileC)); // Expected: false
// console.log("Test 3 (Nested Change):", isDeepEqual(profileA, {...profileB, meta: { id: 2 } })); // Expected: false
// console.log("Test 4 (Primitive):", isDeepEqual(10, 10)); // Expected: true

//**Question:** What will be logged? How do you fix this using the spread operator while keeping
// the code readable?

// const state = {
//   user: { id: 101, details: { city: 'Bangalore' } },
//   theme: 'dark'
// };

// const newState = {...state };
// newState.user.details.city = 'Chennai';

// console.log(state.user.details.city);
// Expected output? Why did it change?

//LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// var lengthOfLongestSubstring = function (s) {
//   let myMap = new Map();
//   let left = (right = 0);
//   let maxLength = 0;
//   while (right < s.length) {
//     if (myMap.has(s[right])) {
//       left = Math.max(myMap.get(s[right]) + 1, left);
//     }
//     myMap.set(s[right], right);
//     maxLength = Math.max(maxLength, right - left + 1);

//     right++;
//     console.log(
//       "maxlength is",
//       maxLength,
//       "left - ",
//       left,
//       "right -",
//       right < s.length,
//     );
//   }
//   return maxLength;
// };

// console.log(lengthOfLongestSubstring("abba"));

// Atlassian | Machine Coding: The Ultimate Deep Clone
// ### **Question:** Implement `deepClone(obj)`. It must handle circular references. Atlassian
//  specifically checks for memory efficiency and handling of nested structures without
//  using `JSON.stringify`.

// function deepClone(value, map = new WeakMap()) {
//   // 1. Base case: handle primitives
//   if (typeof value !== "object" || value === null) return value;
//   // 2. Handle circular references using map
//   if (map.has(value)) return map.get(value);
//   // 3. Recursive cloning for Arrays and Objects
//   let clone = Array.isArray(value) ? [] : {};
//   map.set(value, clone);
//   for (let [key, val] of Object.entries(value)) {
//     clone[key] = deepClone(val, map);
//   }
//   return clone;
// }

// const original = {
//   a: 1,
//   b: { c: 2 },
//   d: [11, 7],
// };
// original.self = original; // Circular reference!

// const copy = deepClone(original);
// console.log(copy!== original); // true
// console.log(copy.b!== original.b); // true
// console.log(copy.self === copy); // true (circularity preserved)

// Flipkart | Machine Coding Round: Robust Debounce Utility
// Question: Implement a debounce utility. The interviewer will likely ask for the
// "Immediate/Leading" flag as a follow-up

// function debounce(func, wait, immediate = false) {
//   let timeout;

//   // TODO: Logic to clear timeout and handle 'this' context
//   return function (...args) {
//     let context = this;
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       if (!immediate) func.apply(context, args);
//     }, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// // // Usage in UI:
// const onSearch = debounce((e) => console.log("Searching for:", e.target.value), 300);
// // document.getElementById('search').addEventListener('input', onSearch);

//DSA QUESTIONS

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let sMap = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (!sMap.has(s[i])) sMap.set(s[i], 1);
//     else {
//       let count = sMap.get(s[i]);
//       sMap.set(s[i], count + 1);
//     }
//   }

//   console.log(sMap);
//   for (let i = 0; i < t.length; i++) {
//     if (!sMap.has(t[i])) return false;
//     else {
//       let count = sMap.get(t[i]);

//       if (count - 1 === 0) sMap.delete(t[i]);
//       else sMap.set(t[i], count - 1);
//     }
//   }
//   console.log("after", sMap.size);
//   if (sMap.size === 0) return true;
//   else return false;
// };

// console.log(isAnagram("anagram", "nagaram"));

//GROUP ANAGRAM
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]
//strs = ["eat","tea","tan","ate","nat","bat"]
// var groupAnagrams = function (strs) {
//   let myMap = new Map();
//   for (let i = 0; i < strs.length; i++) {
//     console.log(strs[i].split("").sort().join(""));
//     let sortedStr = strs[i].split("").sort().join("");
//     if (!myMap.has(sortedStr)) {
//       myMap.set(sortedStr, [strs[i]]);
//     } else {
//       let value = myMap.get(sortedStr);
//       let newValue = [...value, strs[i]];
//       myMap.set(sortedStr, newValue);
//     }
//   }
//   return [...myMap.values()];
// };

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var groupAnagrams = function (strs) {
  let myMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    //create the frequency array
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt(0);
      ++freqArr[index];
    }
    //create the key
    let key = "";
    for (let k = 0; k < 26; k++)
      key = key + String.fromCharCode(97 + k) + freqArr[k];

    //fill the map
    if (!myMap.has(key)) myMap.set(key, [s]);
    else {
      let value = myMap.get(key);
      let newValue = [...value, s];
      myMap.set(key, newValue);
    }
  }
  return [...myMap.values()];
};
