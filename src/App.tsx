import { useState, createContext } from "react";
import { CountryType } from "./interfaces";
import Header from "./components/header.component";
import CurrentCountry from "./components/current-country.component";
import GuessPanels from "./components/guess-panels.component";
import Selections from "./components/selections.component";
import Result from "./components/result.component";
import { IN_PROCESS } from "./constants";
import Footer from "./components/footer.component";

interface contextType {
  currentCountry: CountryType;
  numGuesses: number;
  setNumGuesses: (numGuesses: number) => void;
  selectedCountries: CountryType[];
  setSelectedCountries: (couselectedCountriesntry: CountryType[]) => void;
  game: string;
  setGame: (game: string) => void;
}

export const AppContext = createContext<contextType>({} as contextType);

function App() {
  const [currentCountry, setCurrentCountry] = useState<CountryType>({
    value: "CA",
    label: "Canada",
  } as CountryType);
  const [numGuesses, setNumGuesses] = useState<number>(0);
  const [selectedCountries, setSelectedCountries] = useState<CountryType[]>([
    {},
    {},
    {},
    {},
    {},
    {},
  ] as CountryType[]);
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
