import { useState, createContext } from "react";
import { CountrySelection } from "./interfaces";
import Header from "./components/header.component";
import CurrentCountry from "./components/current-country.component";
import GuessPanels from "./components/guess-panels.component";
import Selections from "./components/selections.component";
import Result from "./components/result.component";
import { IN_PROCESS } from "./constants";
import Footer from "./components/footer.component";

interface contextType {
  currentCountry: CountrySelection;
  numGuesses: number;
  setNumGuesses: (numGuesses: number) => void;
  selectedCountries: CountrySelection[];
  setSelectedCountries: (couselectedCountriesntry: CountrySelection[]) => void;
  game: string;
  setGame: (game: string) => void;
}

export const AppContext = createContext<contextType>({} as contextType);

function App() {
  const [currentCountry, setCurrentCountry] = useState<CountrySelection>({
    value: "CA",
    label: "Canada",
  } as CountrySelection);
  const [numGuesses, setNumGuesses] = useState<number>(0);
  const [selectedCountries, setSelectedCountries] = useState<
    CountrySelection[]
  >([{}, {}, {}, {}, {}, {}] as CountrySelection[]);
  const [game, setGame] = useState<string>(IN_PROCESS);

  const value = {
    currentCountry,
    numGuesses,
    setNumGuesses,
    selectedCountries,
    setSelectedCountries,
    game,
    setGame,
  };

  return (
    <div>
      <Header />
      <AppContext.Provider value={value}>
        <CurrentCountry />
        <GuessPanels />
        <Selections />
        <Result />
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
