import CorridorStepBoxes from "./CorridorStepBoxes";

interface Props {
  color: string;
}

const GreenCorridor = ({ color }: Props) => {
  const absoluteIndexList = [
    12, 13, 14, 15, 16, 17, 11, 110, 111, 112, 113, 114, 10, 9, 8, 7, 6, 5,
  ];
  return (
    <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] flex flex-row-reverse flex-wrap-reverse items-end justify-end">
      <CorridorStepBoxes list={absoluteIndexList} color={color} />
    </div>
  );
};

export default GreenCorridor;
