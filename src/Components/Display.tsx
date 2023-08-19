import Board from "./Board";
import DieSimulator from "./DieSimulator";

const Display = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center relative">
      <DieSimulator
        id="redDieSim"
        className="top-[20%] right-[13%] bg-red-500"
      />
      <DieSimulator
        id="greenDieSim"
        className="top-[55%] right-[13%] bg-green-500"
      />
      <DieSimulator
        id="blueDieSim"
        className="top-[20%] right-[70%] bg-blue-500"
      />
      <DieSimulator
        id="yellowDieSim"
        className="top-[55%] right-[70%] bg-yellow-500"
      />
      <Board />
    </div>
  );
};

export default Display;
