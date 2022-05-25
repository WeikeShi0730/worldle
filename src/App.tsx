import { useState, createContext } from "react";
import { CountrySelection } from "./interfaces";
import CurrentCountry from "./components/current-country.component";
import GuessPanels from "./components/guess-panels.component";
import Selections from "./components/selections.component";
import Result from "./components/result.component";
import { IN_PROCESS, FINISHED_WIN, FINISHED_LOSE } from "./constants";

interface contextType {
  numGuesses: number;
  setNumGuesses: (numGuesses: number) => void;
  selectedCountries: CountrySelection[];
  setSelectedCountries: (couselectedCountriesntry: CountrySelection[]) => void;
}

export const AppContext = createContext<contextType>({} as contextType);

function App() {
  const [numGuesses, setNumGuesses] = useState<number>(0);
  const [selectedCountries, setSelectedCountries] = useState<
    CountrySelection[]
  >([{}, {}, {}, {}, {}, {}] as CountrySelection[]);
  const [win, setWin] = useState<String>(FINISHED_LOSE);

  const value = {
    numGuesses,
    setNumGuesses,
    selectedCountries,
    setSelectedCountries,
    setWin,
  };
  return (
    <div>
      <AppContext.Provider value={value}>
        <CurrentCountry />
        <GuessPanels />
        <Selections />
        <Result win={win} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
