import PropTypes from "prop-types";

const Greetings = ({ greetings }) => {
  return (
    <>
      <div className="greet-container">
        <div className="greet-content">
          <div>
            <img src="/icon-success.svg" alt="success" />
          </div>
          <h1> Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>ash@loremcompany.com.</span> Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button onClick={() => greetings()}>Dismiss message</button>
        </div>
      </div>
    </>
  );
};

Greetings.propTypes = {
  greetings: PropTypes.func.isRequired,
};

export default Greetings;
