import Instruction from "./instruction.component";
import Settings from "./setttings.component";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-2xl pt-10 pb-5 mx-20 text-white border-b-2 border-white">
      <Instruction />
      <div className="">WORLDLE</div>
      <Settings />
    </div>
  );
};

export default Header;
