import { useState, createContext } from "react";
import { CountryType, differenceType } from "./interfaces";
import Header from "./components/header.component";
import CurrentCountry from "./components/current-country.component";
import GuessPanels from "./components/guess-panels.component";
import Selections from "./components/selections.component";
import Result from "./components/result.component";
import { IN_PROCESS } from "./constants";
import Footer from "./components/footer.component";

interface contextType {
  currentCountry: CountryType;
  setCurrentCountry: (currentCountry: CountryType) => void;
  numGuesses: number;
  setNumGuesses: (numGuesses: number) => void;
  selectedCountries: CountryType[];
  setSelectedCountries: (selectedCountries: CountryType[]) => void;
  game: string;
  setGame: (game: string) => void;
  difference: differenceType[];
  setDifference: (difference: differenceType[]) => void;
  enableFlag: boolean;
  setEnableFlag: (enableFlag: boolean) => void;
}

export const AppContext = createContext<contextType>({} as contextType);

function App() {
  const [currentCountry, setCurrentCountry] = useState<CountryType>(
    {} as CountryType
  );
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
  const [difference, setDifference] = useState<differenceType[]>([
    {},
    {},
    {},
    {},
    {},
    {},
  ] as differenceType[]);
  const [enableFlag, setEnableFlag] = useState<boolean>(false);

  const value = {
    currentCountry,
    setCurrentCountry,
    numGuesses,
    setNumGuesses,
    selectedCountries,
    setSelectedCountries,
    game,
    setGame,
    difference,
    setDifference,
    enableFlag,
    setEnableFlag,
  };

  return (
    <div className="h-screen flex flex-col justify-between font-light">
      <AppContext.Provider value={value}>
        <Header />
        <CurrentCountry />
        <GuessPanels />
        <Selections />
        <Result />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
