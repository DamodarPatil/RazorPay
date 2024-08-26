const verifyOrder = async (transactionId, paymentId, signature) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (transactionId === "order_123456" && paymentId && signature) {
        resolve({ success: true });
      } else {
        resolve({ success: false });
      }
    }, 1000);
  });
};
export default verifyOrder;
