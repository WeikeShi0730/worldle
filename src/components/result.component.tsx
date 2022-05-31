import { useState } from "react";
import { IN_PROCESS, FINISHED_WIN } from "../constants";
import Modal from "./modal.component";
const Result = ({ win }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {open ? (
        win === IN_PROCESS ? null : win === FINISHED_WIN ? (
          <Modal message={"you win"} setOpen={setOpen} />
        ) : (
          <Modal message={"you lost"} setOpen={setOpen} />
        )
      ) : null}
    </>
  );
};

export default Result;
