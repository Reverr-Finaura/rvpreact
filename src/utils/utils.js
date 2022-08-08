export const generateOtp = (length = 6) => {
  let chars = "1234567890";
  let uid = "";
  for (let i = 0; i < length; i++) {
    uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return uid;
};
