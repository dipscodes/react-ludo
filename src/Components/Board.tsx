import ColorCorridor from "./ColorCorridor";
import FinishBox from "./FinishBox";
import HouseBox from "./HouseBox";

const Board = () => {
  return (
    <div
      id="ludo-board"
      className="w-[600px] h-[600px] min-h-[600px] min-w-[600px] flex flex-col bg-slate-700"
    >
      <div className="w-[600px] h-[240px] min-w-[600px] min-h-[240px] flex flex-row justify-normal">
        <HouseBox player={3} />
        <ColorCorridor color={0} />
        <HouseBox player={0} />
      </div>
      <div className="w-[600px] h-[120px] min-w-[600px] min-h-[120px] flex flex-row justify-normal">
        <ColorCorridor color={3} />
        <FinishBox />
        <ColorCorridor color={1} />
      </div>
      <div className="w-[600px] h-[240px] min-w-[600px] min-h-[240px] flex flex-row justify-normal">
        <HouseBox player={2} />
        <ColorCorridor color={2} />
        <HouseBox player={1} />
      </div>
    </div>
  );
};

export default Board;
