import CorridorStepBoxes from "./CorridorStepBoxes";

interface Props {
  color: string;
}

const GreenCorridor = ({ color }: Props) => {
  return (
    <div className="w-[240px] h-[120px] min-w-[240px] min-h-[120px] flex flex-row-reverse flex-wrap-reverse items-end justify-end">
      <CorridorStepBoxes color={color} />
    </div>
  );
};

export default GreenCorridor;
