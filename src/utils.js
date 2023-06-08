const mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

const emailValidator = (greetings, emailInput, setEmailError) => {
  if (!emailInput.trim("")) {
    return setEmailError("Valid email required");
  }
  if (mailFormat.test(emailInput)) {
    greetings();
  } else {
    return setEmailError("Valid email required");
  }
};

export default emailValidator;