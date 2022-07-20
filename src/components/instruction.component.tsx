import { useState } from "react";

const Instruction = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setOpen(() => !open);
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>?</button>
      </div>
      {open ? (
        <div className="fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 bg-slate-600">

        </div>
      ) : null}
    </div>
  );
};

export default Instruction;
