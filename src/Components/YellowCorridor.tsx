import CorridorStepBoxes from "./CorridorStepBoxes";

interface Props {
  color: string;
}

const YellowCorridor = ({ color }: Props) => {
  const absoluteIndexList = [
    25, 26, 27, 28, 29, 30, 24, 240, 241, 242, 243, 244, 23, 22, 21, 20, 19, 18,
  ];
  return (
    <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-col-reverse flex-wrap justify-end">
      <CorridorStepBoxes list={absoluteIndexList} color={color} />
    </div>
  );
};

export default YellowCorridor;
