
export const verifyOtp = async (mobile, otp) => {
  if (typeof mobile !== "string" || typeof otp !== "string") {
    throw new Error("Mobile and OTP must be strings.");
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mobile === "9484627793" && otp === "8899") {
        resolve("token_123456");
      } else {
        reject(new Error("Invalid OTP or Mobile Number"));
      }
    }, 1000);
  });
};
