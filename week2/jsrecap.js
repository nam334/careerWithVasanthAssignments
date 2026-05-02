// Zeta | Technical Round: Deep Equality Utility
// Question: Implement isDeepEqual(obj1, obj2). This is essential in frontend development
// for optimizing re-renders in components where you only want to update if the data
// actually changed.

function isDeepEqual(obj1, obj2) {
  // 1. Check if same reference
  if (obj1 === obj2) return true;
  // 2. Check types
  if (typeof obj1 !== typeof obj2) return false;

  //null chk
  if (obj1 === null || obj2 === null) return obj1 === obj2;
  // 3. Recursive key-by-key comparison

  let obj1keys = Object.keys(obj1);
  let obj2keys = Object.keys(obj2);
  if (obj1keys.length !== obj2keys.length) return false;

  for (let key of obj1keys) {
    if (!obj2.hasOwnProperty(key)) return false;
    if (!isDeepEqual(obj1[key], obj2[key])) return false;
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
