import { useState } from "react";

import SubscribeCard from "./components/SubscribeCard";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";

const App = () => {
  const [nSwitch, setNSwitch] = useState(false);

  const greetings = () => {
    setNSwitch(!nSwitch);
  };

  return (
    <>
      <main>
        <section>
          {!nSwitch ? (
            <SubscribeCard greetings={greetings} />
          ) : (
            <Greetings greetings={greetings} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
