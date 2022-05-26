import { IN_PROCESS, FINISHED_WIN } from "../constants";
import Modal from "./modal.component";
const Result = ({ win }: any) => {
  return (
    <>
      {win === IN_PROCESS ? null : win === FINISHED_WIN ? (
        <Modal message={"you win"} />
      ) : (
        <Modal message={"you lost"} />
      )}
    </>
  );
};

export default Result;
