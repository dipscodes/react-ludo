import { useContext } from "react";
import { ColorContext } from "../context";
import BlueCorridor from "./BlueCorridor";
import GreenCorridor from "./GreenCorridor";
import RedCorridor from "./RedCorridor";
import YellowCorridor from "./YellowCorridor";

interface Props {
  color: string;
}

const ColorCorridor = ({ color }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { colors, setColors } = useContext(ColorContext);
  let corridor: JSX.Element = <></>;
  if (color === "green") corridor = <GreenCorridor color={colors[color]} />;
  if (color === "yellow") corridor = <YellowCorridor color={colors[color]} />;
  if (color === "blue") corridor = <BlueCorridor color={colors[color]} />;
  if (color === "red") corridor = <RedCorridor color={colors[color]} />;
  return corridor;
};

export default ColorCorridor;
