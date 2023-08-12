import StepBox from "./StepBox";

const RedCorridor = () => {
  return (
    <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-row flex-wrap">
      {Array(18)
        .fill(true)
        .map((item, index) => (
          <StepBox key={index} />
        ))}
    </div>
  );
};

export default RedCorridor;
