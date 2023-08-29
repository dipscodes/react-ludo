interface Props {
  color: string;
}

const Piece = ({ color }: Props) => {
  return (
    <div
      className="w-[30px] h-[30px] rounded-full border-2 border-solid border-black"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Piece;
