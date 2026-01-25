// 8.### **Adobe | Conceptual Round**

// **Question:** What will be logged? How do you fix this using the spread operator while keeping the code readable?

// JavaScript

// ```jsx
// const state = {
//   user: { id: 101, details: { city: 'Bangalore' } },
//   theme: 'dark'
// };

// const newState = {...state };
// newState.user.details.city = 'Chennai';

// console.log(state.user.details.city);
// // Expected output? Why did it change?
// ```
// Interviewer Logic: Demonstrates that the spread operator is a Shallow Copy.
// If you change a nested object, the original is mutated because the reference was shared.

//my answer -
// In Javascript, arrays and objects are reference types whereas strings , booleans etc are
// stored by value. In the above example spread opeartor creates a shallow copy of state object. A spread opeartor
// copies values at first level, and for objects only the reference is copied which means
// in state object user and are still pointing to the same memory location both for state and newState oject.
// Hence if we update newState.user.details.city = 'Chennai' , the user object in state also gets updated
// since they refer to the same location in memory.

//7.### **Zeta | Technical Round: Deep Equality Utility**

// **Question:** Implement `isDeepEqual(obj1, obj2)`. This is essential in frontend development
// for optimizing re-renders in components where you only want to update if the data
//  actually changed.

// **Snippet & Function Calls:**

// JavaScript
// function isDeepEqual(obj1, obj2) {
//   // 1. Check if same reference
//   // 2. Check types
//   // 3. Recursive key-by-key comparison
// }

// // --- Test Cases ---
// const profileA = { name: "Vasanth", roles: ["admin", "mentor"], meta: { id: 1 } };
// const profileB = { name: "Vasanth", roles: ["admin", "mentor"], meta: { id: 1 } };
// const profileC = { name: "Vasanth", roles: ["admin"], meta: { id: 1 } };

// console.log("Test 1 (Identical):", isDeepEqual(profileA, profileB)); // Expected: true
// console.log("Test 2 (Different Roles):", isDeepEqual(profileA, profileC)); // Expected: false
// console.log("Test 3 (Nested Change):", isDeepEqual(profileA, {...profileB, meta: { id: 2 } })); // Expected: false
// console.log("Test 4 (Primitive):", isDeepEqual(10, 10)); // Expected: true
