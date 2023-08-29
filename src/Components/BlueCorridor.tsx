import CorridorStepBoxes from "./CorridorStepBoxes";

interface Props {
  color: string;
}

const BlueCorridor = ({ color }: Props) => {
  const absoluteIndexList = [
    38, 39, 40, 41, 42, 43, 37, 371, 372, 373, 374, 375, 36, 35, 34, 33, 32, 31,
  ];
  return (
    <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] flex flex-row flex-wrap">
      <CorridorStepBoxes list={absoluteIndexList} color={color} />
    </div>
  );
};

export default BlueCorridor;
