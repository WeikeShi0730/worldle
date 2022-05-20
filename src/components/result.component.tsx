import { IN_PROCESS, FINISHED_WIN } from "../constants";
const Result = ({ win }: any) => {
  return (
    <div>
      {win === IN_PROCESS ? null : win === FINISHED_WIN ? (
        <div>you won</div>
      ) : (
        <div>you lost</div>
      )}
    </div>
  );
};

export default Result;
