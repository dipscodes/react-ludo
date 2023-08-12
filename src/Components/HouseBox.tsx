import PieceBed from "./PieceBed";

interface Props {
  color: string;
  numberOfPieces?: number;
}

const HouseBox = ({ color, numberOfPieces }: Props) => {
  return (
    <div
      className="w-full h-full flex flex-row justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="w-[160px] h-[160px] bg-white rounded-lg flex flex-row flex-wrap">
        <PieceBed color={color} />
        <PieceBed color={color} />
        <PieceBed color={color} />
        <PieceBed color={color} />
      </div>
    </div>
  );
};

HouseBox.defaultProps = {
  numberOfPieces: 4,
};

export default HouseBox;
