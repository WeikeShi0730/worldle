import { IN_PROCESS, FINISHED_WIN } from "../constants";
const Result = ({ win }: any) => {
  return (
    <>
      {win === IN_PROCESS ? null : win === FINISHED_WIN ? (
        <div className="fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center z-10 bg-slate-200 p-20 rounded backdrop-blur-md bg-opacity-20">
            <div>you won</div>
          </div>
        </div>
      ) : (
        <div className="fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center z-10 bg-slate-200 p-20 rounded backdrop-blur-md bg-opacity-20">
            <div>you lost</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
{
  /* <div className="absolute w-full h-full">//top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 */
}
