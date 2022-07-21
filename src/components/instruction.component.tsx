import { useState } from "react";

const Instruction = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };
//   const handleClickClose = (event: React.MouseEvent<HTMLElement>) => {};
  return (
    <div>
      <div>
        <button onClick={handleClick}>?</button>
      </div>
      {open ? (
        <div className="fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 text-white rounded-lg backdrop-blur-md bg-opacity-20 shadow-md">
          <div className="flex m-10">
            {/* <button
              className="self-end m-5 text-2xl hover:bg-opacity-50 duration-200 hover:text-slate-700"
              onClick={handleClickClose}
            >
              X
            </button> */}
            <p>How to play</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Instruction;
