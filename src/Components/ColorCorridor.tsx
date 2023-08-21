import { useContext } from "react";
import { ColorContext } from "../context";
import BlueCorridor from "./BlueCorridor";
import GreenCorridor from "./GreenCorridor";
import RedCorridor from "./RedCorridor";
import YellowCorridor from "./YellowCorridor";

interface Props {
  color: number;
}

const ColorCorridor = ({ color }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { colors, setColors } = useContext(ColorContext);
  let corridor: JSX.Element = <></>;
  if (color === 0) corridor = <RedCorridor color={colors[color]} />;
  if (color === 1) corridor = <GreenCorridor color={colors[color]} />;
  if (color === 2) corridor = <YellowCorridor color={colors[color]} />;
  if (color === 3) corridor = <BlueCorridor color={colors[color]} />;
  return corridor;
};

export default ColorCorridor;
