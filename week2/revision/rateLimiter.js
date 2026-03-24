const rateLimiter = createRateLimiter(3, 2000);

function createRateLimiter(limit, windowTime) {
  // TODO: Your implementation
}

const limitedFn = rateLimiter((msg) => {
  console.log("Executed:", msg);
});

// --- Test Calls ---
// limitedFn("A"); // ✅
// limitedFn("B"); // ✅
// limitedFn("C"); // ✅
// limitedFn("D"); // ❌ should be blocked

// setTimeout(() => {
//   limitedFn("E"); // ✅ (after window resets)
// }, 2500);
