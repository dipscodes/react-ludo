import CorridorStepBoxes from "./CorridorStepBoxes";

interface Props {
  color: string;
}

const YellowCorridor = ({ color }: Props) => {
  return (
    <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-col-reverse flex-wrap justify-end">
      <CorridorStepBoxes color={color} />
    </div>
  );
};

export default YellowCorridor;
