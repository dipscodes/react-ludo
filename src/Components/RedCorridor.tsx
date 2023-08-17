import CorridorStepBoxes from "./CorridorStepBoxes";

interface Props {
  color: string;
}

const RedCorridor = ({ color }: Props) => {
  const absoluteIndexList = [
    51, 0, 1, 2, 3, 4, 50, 500, 501, 502, 503, 504, 49, 48, 47, 46, 45, 44,
  ];
  return (
    <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-col items-end flex-wrap-reverse">
      <CorridorStepBoxes list={absoluteIndexList} color={color} />
    </div>
  );
};

export default RedCorridor;
