export const verifyOtp = async (mobile, otp) => {
  if (typeof mobile !== "string" || typeof otp !== "string") {
    throw new Error("Mobile and OTP must be strings.");
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mobile === "9484627793" && otp === "8899") {
        const token = generateRandomToken();
        resolve(token);
      } else {
        reject(new Error("Invalid OTP or Mobile Number"));
      }
    }, 1000);
  });
};

const generateRandomToken = () => {
  const randomPart = Math.random().toString(36).substring(2, 15);
  const datePart = Date.now().toString(36);
  return `${randomPart}${datePart}`;
};
