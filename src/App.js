import React, { useState } from "react";
import "./App.css";
import Counter from "../src/components/Counter";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("green");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <div className="App">
        <Counter />
        <button
          onClick={() =>
            setTheme((prevTheme) => {
              return prevTheme === "red" ? "blue" : "red";
            })
          }
        >
          Toggle color
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
