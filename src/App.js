import "./App.css";
import Main from "./Components/Main";
import { useState } from "react";
function App() {
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const handleMouseEnter = () => {
    const newTop = Math.random() * (window.innerHeight - 50);
    const newLeft = Math.random() * (window.innerHeight - 100);
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="App">
      <Main />
      <button
        className="btn1 run"
        type="button"
        onMouseEnter={handleMouseEnter}
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,

          transition: "all 0.2s",
        }}
      >
        Піймай мене
      </button>
    </div>
  );
}

export default App;
