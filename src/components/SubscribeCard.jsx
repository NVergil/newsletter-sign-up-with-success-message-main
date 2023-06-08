import PropTypes from "prop-types";
import { useState } from "react";
import emailValidator from "../utils";

const SubscribeCard = ({ greetings }) => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Stay updated!</h1>
          <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
          <div className="list-container">
            <div className="list-item">
              <img src="/icon-list.svg" alt="" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="list-item">
              <img src="/icon-list.svg" alt="" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="list-item">
              <img src="/icon-list.svg" alt="" />
              <p>And much more!</p>
            </div>
          </div>
          <div>
            <form>
              <label htmlFor="email">Email address</label>
              {emailError && <p className="email-error-p">{emailError}</p>}
              <input
                className={emailError ? "email-error-input" : undefined}
                id="email"
                type="email"
                placeholder="email@company.com"
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
                onFocus={() => setEmailError("")}
              />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  emailValidator(greetings, emailInput, setEmailError);
                }}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
        <picture className="illustration-desktop">
          <img src="/illustration-sign-up-desktop.svg" alt="sign-up-desk" />
        </picture>
        <picture className="illustration-mobile">
          <img src="/illustration-sign-up-mobile.svg" alt="sign-up-mobile" />
        </picture>
      </div>
    </>
  );
};

SubscribeCard.propTypes = {
  greetings: PropTypes.func.isRequired,
};

export default SubscribeCard;
