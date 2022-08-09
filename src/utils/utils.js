export const generateOtp = (length = 6) => {
  let chars = "1234567890";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return otp;
};
