import { useState } from "react";
import Payment from "./components/Payment";
import VerificationOtp from "./components/VerificationOtp";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <VerificationOtp onTokenVerified={(token) => setToken(token)} />
      {token && <Payment token={token} />}
    </div>
  );
};

export default App;