import StepBox from "./StepBox";

interface Props {
  list: number[] | (number | string)[];
  color: string;
}

const CorridorStepBoxes = ({ list, color }: Props) => {
  return (
    <>
      {list.map((item, index) => {
        if ((index >= 7 && index <= 11) || index === 1)
          return (
            <StepBox
              color={color}
              key={index}
              index={index}
              absoluteIndex={item}
            />
          );
        else return <StepBox key={index} index={index} absoluteIndex={item} />;
      })}
    </>
  );
};

CorridorStepBoxes.defaultProps = {
  list: new Array(18).fill(true),
};

export default CorridorStepBoxes;
