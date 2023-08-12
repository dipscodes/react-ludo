import Piece from "./Piece";

interface Props {
  color: string;
}

const PieceBed = ({ color }: Props) => {
  return (
    <div className="w-1/2 h-1/2 p-4">
      <div className="w-full h-full rounded-lg border-4 border-solid border-black flex flex-row justify-center items-center">
        <Piece color={color} />
      </div>
    </div>
  );
};

export default PieceBed;
