import { useState, useEffect, createContext } from "react";
import { CountryType } from "./interfaces";
import Header from "./components/header.component";
import getTodaySeed from "./utils/getTodaySeed";
import CurrentCountry from "./components/current-country.component";
import GuessPanels from "./components/guess-panels.component";
import Selections from "./components/selections.component";
import WikiLink from "./components/wikilink.component";
import Result from "./components/result.component";
import { IN_PROCESS } from "./constants";
import Footer from "./components/footer.component";
import { useCookies } from "react-cookie";

interface contextType {
  todayCountry: CountryType;
  setTodayCountry: (currentCountry: CountryType) => void;
  numGuesses: number;
  setNumGuesses: (numGuesses: number) => void;
  selectedCountries: CountryType[];
  setSelectedCountries: (selectedCountries: CountryType[]) => void;
  game: string;
  setGame: (game: string) => void;
  enableFlag: boolean;
  setEnableFlag: (enableFlag: boolean) => void;
  unit: boolean;
  setUnit: (unit: boolean) => void;
  setCookie: any;
  random: number;
}

export const AppContext = createContext<contextType>({} as contextType);

function App() {
  const random = getTodaySeed();
  const [todayCountry, setTodayCountry] = useState<CountryType>(
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
  const [enableFlag, setEnableFlag] = useState<boolean>(false);
  const [unit, setUnit] = useState<boolean>(true);
  const [cookies, setCookie] = useCookies([random.toString()]);

  useEffect(() => {
    var enableFlagSession = sessionStorage.getItem("enableFlagSession");
    var enableFlagToggle = true;
    if (enableFlagSession === null || enableFlagSession === "false") {
      enableFlagToggle = false;
    }
    setEnableFlag(enableFlagToggle);

    var unitSession = sessionStorage.getItem("unitSession");
    var unitToggle = true;
    if (unitSession === null || unitSession === "false") {
      unitToggle = false;
    }
    setUnit(unitToggle);

    const userTodayRecord =
      cookies && Object.keys(cookies).length !== 0
        ? cookies[random.toString() as string]
        : null;

    if (userTodayRecord !== undefined && userTodayRecord !== null) {
      setSelectedCountries(userTodayRecord);
      var count = userTodayRecord.filter((e: CountryType) => {
        return e.value !== undefined;
      }).length;
      setNumGuesses(count);
    }
  }, [cookies, random]);

  const value = {
    todayCountry,
    setTodayCountry,
    numGuesses,
    setNumGuesses,
    selectedCountries,
    setSelectedCountries,
    game,
    setGame,
    enableFlag,
    setEnableFlag,
    unit,
    setUnit,
    setCookie,
    random,
  };

  return (
    <div className="h-screen flex flex-col justify-between font-light">
      <AppContext.Provider value={value}>
        <Header />
        <CurrentCountry />
        <div className="space-y-0">
          <GuessPanels />
          <Selections />
        </div>
        <WikiLink />
        <Result />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
