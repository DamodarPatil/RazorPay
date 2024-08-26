const verifyOrder = async (transactionId, paymentId, signature, token) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (
          transactionId === "order_123456" &&
          paymentId &&
          signature &&
          token === "token_123456"
        ) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };
export default verifyOrder;