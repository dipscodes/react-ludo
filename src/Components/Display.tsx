import Board from "./Board";
import DieSimulator from "./DieSimulator";
import { FaDice } from "react-icons/fa";

const Display = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center relative">
      <div id="0-dice" data-face={6}>
        <FaDice
          size={30}
          className="top-[10%] right-[23%] bg-red-500 absolute cursor-pointer"
        />
      </div>
      <div id="1-dice" data-face={6}>
        <FaDice
          size={30}
          className="top-[95%] right-[23%] bg-green-500 absolute cursor-pointer"
        />
      </div>
      <div id="2-dice" data-face={0}>
        <FaDice
          size={30}
          className="top-[95%] right-[70%] bg-yellow-500 absolute cursor-pointer"
        />
      </div>
      <div id="3-dice" data-face={0}>
        <FaDice
          size={30}
          className="top-[10%] right-[70%] bg-blue-500 absolute cursor-pointer"
        />
      </div>
      <DieSimulator
        id="redDieSim"
        className="top-[20%] right-[13%] bg-red-500"
        player={0}
      />
      <DieSimulator
        id="greenDieSim"
        className="top-[55%] right-[13%] bg-green-500"
        player={1}
      />
      <DieSimulator
        id="blueDieSim"
        className="top-[20%] right-[70%] bg-blue-500"
        player={3}
      />
      <DieSimulator
        id="yellowDieSim"
        className="top-[55%] right-[70%] bg-yellow-500"
        player={2}
      />
      <Board />
    </div>
  );
};

export default Display;
