import BlueCorridor from "./BlueCorridor";
import GreenCorridor from "./GreenCorridor";
import RedCorridor from "./RedCorridor";
import YellowCorridor from "./YellowCorridor";

interface Props {
  color: string;
}

const ColorCorridor = ({ color }: Props) => {
  let corridor: JSX.Element = <></>;
  if (color === "green") corridor = <GreenCorridor />;
  if (color === "yellow") corridor = <YellowCorridor />;
  if (color === "blue") corridor = <BlueCorridor />;
  if (color === "red") corridor = <RedCorridor />;
  return corridor;
};

export default ColorCorridor;
