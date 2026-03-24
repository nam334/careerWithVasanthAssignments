// Question 1: ### **Uber | Machine Coding: Asynchronous Task Runner (Concurrency Limit)**

// **Question:** Imagine Uber is fetching data for 100 nearby drivers. To avoid hitting API rate limits or crashing the browser with too many simultaneous requests, you must implement a
// "Batch Runner."

// Write a function `promiseAllWithConcurrencyLimit` that takes an array of "task functions"
// (functions that return a promise) and a limit `limit`. It should execute no more than `limit` tasks
// at any given time. As soon as one task finishes, the next one in the queue should start.

// /**
//  * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
//  * @param {number} limit - Maximum concurrent executions
//  */
async function promiseAllWithConcurrencyLimit(tasks, limit) {
  let results = [],
    completedTasks = 0,
    currentIndex = 0;
  return new Promise((resolve, reject) => {
    const i = currentIndex;
    currentIndex++;
    function runtask() {
      tasks[i]()
        .then((res) => {
          results[i] = res;
          if (currentIndex < tasks.length) runtask();
          completedTasks++;
          if (completedTasks === tasks.length) resolve(results);
        })
        .catch((err) => {
          results[i] = err;
          if (currentIndex < tasks.length) runtask();
          completedTasks++;
          if (completedTasks === tasks.length) resolve(results);
        });
    }
    for (let i = 0; i < limit; i++) runtask();
  });
}

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

// async function promiseAllWithConcurrencyLimit(tasks, limit)
// {
//     // TODO: Your implementation
//     // let results = [], currentIndex = 0;
//     // for (let i = currentIndex; i < limit; i++) {
//     //  tasks[i]() ?.then((res) =>
//     //  { results[i] = res;
//     // if (i + 1 < tasks.length) {
//     //  currentIndex += 1; tasks[currentIndex](); } })
//     // .catch((err) => err); }
//     }
