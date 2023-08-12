import StepBox from "./StepBox";

const Board = () => {
  return (
    <div
      id="ludo-board"
      className="w-[600px] h-[600px] min-h-[600px] min-w-[600px] bg-slate-500 rounded-md flex flex-col"
    >
      <div className="w-[600px] h-[240px] min-w-[600px] min-h-[240px] bg-zinc-600 flex flex-row justify-normal">
        <div
          id="house-blue"
          className="w-[240px] h-[240px] min-w-[240px] min-h-[240px] border-2 border-solid border-black bg-blue-600"
        ></div>
        <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] bg-emerald-500 flex flex-row flex-wrap">
          {Array(18)
            .fill(true)
            .map((item, index) => (
              <StepBox key={index} />
            ))}
        </div>
        <div
          id="house-red"
          className="w-[240px] h-[240px] min-w-[240px] min-h-[240px] border-2 border-solid border-black bg-red-500"
        ></div>
      </div>
      <div className="w-[600px] h-[120px] min-w-[600px] min-h-[120px] flex flex-row flex-wrap">
        <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] bg-zinc-600 flex flex-row flex-wrap">
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
        <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] bg-zinc-600 flex flex-row flex-wrap">
          {Array(18)
            .fill(true)
            .map((item, index) => (
              <StepBox key={index} />
            ))}
        </div>
      </div>
      <div className="w-[600px] h-[240px] min-w-[600px] min-h-[240px] bg-zinc-600 flex flex-row justify-normal">
        <div
          id="house-yellow"
          className="w-[240px] h-[240px] min-w-[240px] min-h-[240px] border-2 border-solid border-black bg-yellow-500"
        ></div>
        <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] bg-emerald-500 flex flex-row flex-wrap">
          {Array(18)
            .fill(true)
            .map((item, index) => (
              <StepBox key={index} />
            ))}
        </div>
        <div
          id="house-green"
          className="w-[240px] h-[240px] min-w-[240px] min-h-[240px] border-2 border-solid border-black bg-green-500"
        ></div>
      </div>
    </div>
  );
};

export default Board;
