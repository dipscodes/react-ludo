import HouseBox from "./HouseBox";
import StepBox from "./StepBox";

const Board = () => {
  return (
    <div
      id="ludo-board"
      className="w-[600px] h-[600px] min-h-[600px] min-w-[600px] flex flex-col"
    >
      <div className="w-[600px] h-[240px] min-w-[600px] min-h-[240px] flex flex-row justify-normal">
        <div
          id="house-blue"
          className="w-[240px] h-[240px] min-w-[240px] min-h-[240px]"
        >
          <HouseBox color="rgb(37, 99, 235)" />
        </div>
        <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-row flex-wrap">
          {Array(18)
            .fill(true)
            .map((item, index) => (
              <StepBox key={index} />
            ))}
        </div>
        <div
          id="house-red"
          className="w-[240px] h-[240px] min-w-[240px] min-h-[240px]"
        >
          <HouseBox color="rgb(239, 68, 68)" />
        </div>
      </div>
      <div className="w-[600px] h-[120px] min-w-[600px] min-h-[120px] flex flex-row flex-wrap">
        <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] flex flex-row flex-wrap">
          {Array(18)
            .fill(true)
            .map((item, index) => (
              <StepBox key={index} />
            ))}
        </div>
        <div
          id="finish-box"
          className="w-[120px] h-[120px] min-w-[120px] min-h-[120px]"
        ></div>
        <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] flex flex-row flex-wrap">
          {Array(18)
            .fill(true)
            .map((item, index) => (
              <StepBox key={index} />
            ))}
        </div>
      </div>
      <div className="w-[600px] h-[240px] min-w-[600px] min-h-[240px] flex flex-row justify-normal">
        <div
          id="house-yellow"
          className="w-[240px] h-[240px] min-w-[240px] min-h-[240px]"
        >
          <HouseBox color="rgb(234, 179, 8)" />
        </div>
        <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-row flex-wrap">
          {Array(18)
            .fill(true)
            .map((item, index) => (
              <StepBox key={index} />
            ))}
        </div>
        <div
          id="house-green"
          className="w-[240px] h-[240px] min-w-[240px] min-h-[240px]"
        >
          <HouseBox color="rgb(34, 197, 94)" />
        </div>
      </div>
    </div>
  );
};

export default Board;
