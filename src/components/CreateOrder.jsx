const createOrder = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        _id: "order_123456",
        amount: 2000,
        currency: "INR",
      });
    }, 1000);
  });
};
export default createOrder;
