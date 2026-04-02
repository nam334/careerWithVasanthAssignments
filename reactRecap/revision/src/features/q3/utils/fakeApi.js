export const fakeApi = () => {
  let timer = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timer > 0.5) resolve("API succeeded");
      else reject("API rejected");
    }, 3000);
  });
};
