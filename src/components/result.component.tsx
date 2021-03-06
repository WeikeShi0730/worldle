import { useState, useEffect, useContext } from "react";
import { IN_PROCESS, FINISHED_WIN, FINISHED_LOSE } from "../constants";
import { AppContext } from "../App";
import Modal from "./modal.component";
const Result = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentCountry, numGuesses, selectedCountries, setGame, game } =
    useContext(AppContext);

  useEffect(() => {
    if (
      numGuesses === 6 &&
      selectedCountries[numGuesses - 1]?.value !== currentCountry.value
    ) {
      setGame(FINISHED_LOSE);
      setOpen(true);
    } else if (
      selectedCountries[numGuesses - 1]?.value !== undefined &&
      selectedCountries[numGuesses - 1]?.value === currentCountry.value
    ) {
      setGame(FINISHED_WIN);
      setOpen(true);
    }
  }, [numGuesses, game, setGame, selectedCountries, currentCountry]);

  return (
    <>
      {open ? game === IN_PROCESS ? null : <Modal setOpen={setOpen} /> : null}
    </>
  );
};

export default Result;
