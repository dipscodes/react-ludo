import { useContext } from "react";
import StepBox from "./StepBox";
import { ColorContext } from "../context";

const RedCorridor = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, setColor } = useContext(ColorContext);
  return (
    <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-col items-end flex-wrap-reverse">
      {Array(18)
        .fill(true)
        .map((item, index) => {
          if ((index >= 7 && index <= 11) || index === 1)
            return <StepBox color={color.red} key={index} index={index} />;
          else return <StepBox key={index} index={index} />;
        })}
    </div>
  );
};

export default RedCorridor;
