import CorridorStepBoxes from "./CorridorStepBoxes";

interface Props {
  color: string;
}

const BlueCorridor = ({ color }: Props) => {
  return (
    <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] flex flex-row flex-wrap">
      <CorridorStepBoxes color={color} />
    </div>
  );
};

export default BlueCorridor;
