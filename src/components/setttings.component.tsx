import { useState, useRef, useContext } from "react";
import { useClickOutside } from "../utils/useClickOutside";
import { AppContext } from "../App";
import { VscGear, VscClose } from "react-icons/vsc";

const Settings = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { enableFlag, setEnableFlag, unit, setUnit } = useContext(AppContext);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const handleMarkClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };
  const handleClickClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(false);
  };
  const handleToggle = (e: any) => {
    switch (e.target.value) {
      case "flag":
        setEnableFlag(!enableFlag);
        sessionStorage.setItem("enableFlagSession", (!enableFlag).toString());
        break;
      case "unit":
        setUnit(!unit);
        sessionStorage.setItem("unit", (!unit).toString());
        break;
      default:
        break;
    }
  };
  return (
    <div ref={ref}>
      <div className="flex content-center items-center hover:bg-opacity-50 duration-200 text-slate-300 hover:text-white font-light">
        <button onClick={handleMarkClick}>
          <VscGear />
        </button>
      </div>
      {open ? (
        <div className="fixed w-80 md:w-96 z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-white text-base rounded-lg backdrop-blur-md bg-opacity-20 shadow-md">
          <div className="flex flex-col m-5 sm:m-10">
            <button
              className="flex content-center items-center self-end text-lg md:text-2xl hover:bg-opacity-50 duration-200 hover:text-slate-700 font-light"
              onClick={handleClickClose}
            >
              <VscClose />
            </button>
            <p className="border-b text-center text-lg md:text-2xl">Settings</p>
            <br />
            <div className="flex items-center justify-between text-sm md:text-base">
              <div className="">Unit</div>
              <div className="flex gap-x-4">
                <span>mi</span>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    onChange={handleToggle}
                    checked={unit}
                    value="unit"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <span>km</span>
              </div>
            </div>
            <br />
            <div className="flex items-center justify-between text-sm md:text-base">
              <div className="">Flip to see flags</div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={handleToggle}
                  checked={enableFlag}
                  value="falg"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Settings;
