import Instruction from "./instruction.component";

const Header = () => {
  return (
    <div className="flex justify-center items-center text-2xl pt-10 pb-5 mx-20 text-white border-b-2 border-white">
      <div className="flex-auto">WORLDLE</div>
      <div className="">
        <Instruction />
      </div>
    </div>
  );
};

export default Header;
