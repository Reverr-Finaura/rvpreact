import emailjs from "@emailjs/browser";

export const sendOtpToMail = (userName, email, otp) => {
  let templateParams = {
    from_name: "Reverr",
    to_name: email,
    to_email: email,
    otp: otp,
  };

  return emailjs.send(
    "service_lfmmz8k",
    "template_n3pcht5",
    templateParams,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};

export const sendAccountHasBeenCreatedMail = () => {
  let templateParams = {
    subject: "Account Verfication Confirmed",
    name: "Kunal Rajput",
    email: "kunalrajput7656@gmail.com",
    message:
      "Congratulations ! Welcome to reverr your account has been created successfully",
  };

  return emailjs.send(
    "service_lfmmz8k",
    "template_6lqwjap",
    templateParams,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};
