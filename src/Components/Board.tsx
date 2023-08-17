import ColorCorridor from "./ColorCorridor";
import FinishBox from "./FinishBox";
import HouseBox from "./HouseBox";

const Board = () => {
  return (
    <div
      id="ludo-board"
      className="w-[600px] h-[600px] min-h-[600px] min-w-[600px] flex flex-col"
    >
      <div className="w-[600px] h-[240px] min-w-[600px] min-h-[240px] flex flex-row justify-normal">
        <HouseBox color="rgb(37, 99, 235)" />
        <ColorCorridor color="0" />
        <HouseBox color="rgb(239, 68, 68)" />
      </div>
      <div className="w-[600px] h-[120px] min-w-[600px] min-h-[120px] flex flex-row justify-normal">
        <ColorCorridor color="3" />
        <FinishBox />
        <ColorCorridor color="1" />
      </div>
      <div className="w-[600px] h-[240px] min-w-[600px] min-h-[240px] flex flex-row justify-normal">
        <HouseBox color="rgb(234, 179, 8)" />
        <ColorCorridor color="2" />
        <HouseBox color="rgb(34, 197, 94)" />
      </div>
    </div>
  );
};

export default Board;
