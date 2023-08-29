import { useContext } from "react";
import { ColorContext } from "../context";
import PieceBed from "./PieceBed";

interface Props {
  player: number;
  numberOfPieces?: number;
}

const HouseBox = ({ player, numberOfPieces }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { colors, setColors } = useContext(ColorContext);
  return (
    <div
      className="w-[240px] h-[240px] min-w-[240px] min-h-[240px] flex flex-row justify-center items-center"
      style={{ backgroundColor: "rgb(51 65 85 / 1" }}
    >
      <div className="w-[160px] h-[160px] bg-slate-700 rounded-lg flex flex-row flex-wrap border-2 border-solid border-black">
        <PieceBed color={colors[player]} player={player} />
        <PieceBed color={colors[player]} player={player} />
        <PieceBed color={colors[player]} player={player} />
        <PieceBed color={colors[player]} player={player} />
      </div>
    </div>
  );
};

HouseBox.defaultProps = {
  numberOfPieces: 4,
};

export default HouseBox;
