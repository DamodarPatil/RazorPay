import { useState } from "react";
import PropTypes from "prop-types";
import { verifyOtp } from "../services/verifyOtp";

const VerificationOtp = ({ onTokenVerified }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerifyOtp = async () => {
    setError("");

    if (mobile.trim() === "" || otp.trim() === "") {
      setError("Mobile number and OTP are required.");
      return;
    }
    setIsLoading(true);

    try {
      const token = await verifyOtp(mobile, otp);
      setToken(token);
      alert("OTP Verified! Token saved.");
      if (onTokenVerified) onTokenVerified(token); // Notify parent component of token
    } catch (error) {
      setError("OTP Verification Failed. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Verify OTP</h2>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleVerifyOtp}
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded-md transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-300"
      >
        {isLoading ? "Verifying..." : "Verify OTP"}
      </button>
      {token && <p className="mt-4 text-gray-700">Token: {token}</p>}
    </div>
  );
};

VerificationOtp.propTypes = {
  onTokenVerified: PropTypes.func.isRequired,
};

export default VerificationOtp;