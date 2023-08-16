import { useContext } from "react";
import StepBox from "./StepBox";
import { ColorContext } from "../context";

const YellowCorridor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, setColor } = useContext(ColorContext);
  return (
    <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-col-reverse flex-wrap justify-end">
      {Array(18)
        .fill(true)
        .map((item, index) => {
          if ((index >= 7 && index <= 11) || index === 1)
            return <StepBox color={color.yellow} key={index} index={index} />;
          else return <StepBox key={index} index={index} />;
        })}
    </div>
  );
};

export default YellowCorridor;
