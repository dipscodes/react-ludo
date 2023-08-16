import { useContext } from "react";
import StepBox from "./StepBox";
import { ColorContext } from "../context";

const GreenCorridor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, setColor } = useContext(ColorContext);
  return (
    <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] flex flex-row-reverse flex-wrap-reverse items-end justify-end">
      {Array(18)
        .fill(true)
        .map((item, index) => {
          if ((index >= 7 && index <= 11) || index === 1)
            return <StepBox color={color.green} key={index} index={index} />;
          else return <StepBox key={index} index={index} />;
        })}
    </div>
  );
};

export default GreenCorridor;
