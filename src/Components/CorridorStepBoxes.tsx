import StepBox from "./StepBox";

interface Props {
  color: string;
}

const CorridorStepBoxes = ({ color }: Props) => {
  return (
    <>
      {Array(18)
        .fill(true)
        .map((item, index) => {
          if ((index >= 7 && index <= 11) || index === 1)
            return <StepBox color={color} key={index} index={index} />;
          else return <StepBox key={index} index={index} />;
        })}
    </>
  );
};

export default CorridorStepBoxes;
