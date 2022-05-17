import { useState, createContext } from "react";

import CurrentCountry from "./components/current-country.component";
import GuessPanels from "./components/guess-panels.component";
import Selections from "./components/selections.component";

function App() {
  const SelectionsContext = createContext({});
  const [numGuesses, setNumGuesses] = useState<number>(0);
  const value = { numGuesses, setNumGuesses };
  return (
    <div>
      <SelectionsContext.Provider value={value}>
        <CurrentCountry />
        <GuessPanels />
        <Selections />
      </SelectionsContext.Provider>
    </div>
  );
}

export default App;
