export const generateMessage = () => {
  return {
    text: "This is a generic message",
    id: Math.random(),
    timestamp: Date.now(),
  };
};
