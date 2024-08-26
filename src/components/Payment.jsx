import PropTypes from "prop-types";
import createOrder from "./CreateOrder";
import verifyOrder from "./VerifyOrder";

const Payment = ({ token }) => {
  const handlePayment = async () => {
    try {
      const orderData = await createOrder(token);
      const { _id, amount, currency } = orderData;

      const options = {
        key: import.meta.env.RAZORPAY_KEY,
        amount: amount,
        currency: currency,
        name: "Razorpay",
        description: "Test Transaction",
        image: "https://random.image/random_logo",
        order_id: _id, 
        handler: async function (response) {
         
          const verifyData = await verifyOrder(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature,
            token
          );

          if (verifyData.success) {
            alert("Payment Verified Successfully!");
          } else {
            alert("Payment Verification Failed!");
          }
        },
        prefill: {
          name: "Damodar Patil",
          email: "damodar@gmail.com",
          contact: "9484627793",
        },
        notes: {
          address: "Ahmedabad",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("An error occurred during payment. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800">Complete Payment</h2>
      <button
        onClick={handlePayment}
        className="w-full bg-green-600 text-white py-3 rounded-md transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Pay Now
      </button>
    </div>
  );
};

Payment.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Payment;
