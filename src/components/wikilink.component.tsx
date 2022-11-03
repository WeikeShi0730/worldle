import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { FINISHED_LOSE, FINISHED_WIN } from "../constants";

const WikiLink = () => {
  const { game, todayCountry } = useContext(AppContext);
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    if (todayCountry && Object.keys(todayCountry).length !== 0) {
      const link =
        "https://en.wikipedia.org/wiki/" +
        todayCountry.label.replace(/\s+/g, "_");
      setLink(link);
    }
  }, [todayCountry]);

  useEffect(() => {
    if (game === FINISHED_LOSE || game === FINISHED_WIN) {
      var element = document.getElementById("wikilink");
      element?.classList.remove("invisible");
    }
  }, [game]);

  return (
    <div
      id="wikilink"
      className="flex justify-center items-center text-white text-xs md:text-sm invisible"
    >
      <a href={link} rel="noopener noreferrer" target="_blank">
        <div className="link-underline link-underline-black">
          📚 On Wikipedia
        </div>
      </a>
    </div>
  );
};
export default WikiLink;
