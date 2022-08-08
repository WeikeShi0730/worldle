import Instruction from "./instruction.component";
import Settings from "./setttings.component";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-2xl pt-10 pb-5 mx-20 text-white border-b-2 border-white">
      <div className="">
        <Instruction />
      </div>
      <div className="">WORLDLE</div>
      <div className="">
        <Settings />
      </div>
    </div>
  );
};

export default Header;
