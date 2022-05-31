import { useState } from "react";
import { IN_PROCESS, FINISHED_WIN } from "../constants";
import Modal from "./modal.component";
const Result = ({ game }: { game: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {open ? (
        game === IN_PROCESS ? null : game === FINISHED_WIN ? (
          <Modal message={"you win"} setOpen={setOpen} />
        ) : (
          <Modal message={"you lost"} setOpen={setOpen} />
        )
      ) : null}
    </>
  );
};

export default Result;
