import emailjs from "@emailjs/browser";

export const sendOtpToMail = () => {
  let templateParams = {
    from_name: "Reverr",
    to_name: "Kunal Rajput",
    to_email: "Kunalrajput7656@gmail.com",
    otp: 569876,
  };

  return emailjs.send(
    "service_lfmmz8k",
    "template_n3pcht5",
    templateParams,
    "user_FR6AulWQMZry87FBzhKNu"
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
    "user_FR6AulWQMZry87FBzhKNu"
  );
};
