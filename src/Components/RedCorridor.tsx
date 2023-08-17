import CorridorStepBoxes from "./CorridorStepBoxes";

interface Props {
  color: string;
}

const RedCorridor = ({ color }: Props) => {
  return (
    <div className="w-[120px] h-[240px] min-w-[120px] min-h-[240px] flex flex-col items-end flex-wrap-reverse">
      <CorridorStepBoxes color={color} />
    </div>
  );
};

export default RedCorridor;
