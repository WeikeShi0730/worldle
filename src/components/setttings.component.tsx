import { useState, useRef } from "react";
import { useClickOutside } from "../utils/useClickOutside";

const Settings = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(() => false));

  const handleMarkClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };
  const handleClickClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <div ref={ref}>
      <div className="hover:bg-opacity-50 duration-200 text-slate-300 hover:text-white font-light">
        <button onClick={handleMarkClick}>⚙</button>
      </div>
      {open ? (
        <div className="fixed w-96 z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-white text-base rounded-lg backdrop-blur-md bg-opacity-20 shadow-md">
          <div className="flex flex-col m-5 sm:m-10">
            <button
              className="self-end text-2xl hover:bg-opacity-50 duration-200 hover:text-slate-700 font-light"
              onClick={handleClickClose}
            >
              X
            </button>
            <p className="border-b text-center text-2xl">Settings</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Settings;
