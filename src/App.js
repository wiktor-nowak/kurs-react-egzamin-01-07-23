import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <header className="header">
        To test the modal component, please click the button below this text.
      </header>
      <br />
      <button className="button" onClick={setVisibility}>
        SHOW MODAL
      </button>
      <br />
      {isVisible && <Modal setIsVisible={setIsVisible} />}
    </div>
  );
}

export default App;
