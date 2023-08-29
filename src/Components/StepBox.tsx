import { GrStarOutline } from "react-icons/gr";

interface Props {
  color?: string;
  index?: number;
  absoluteIndex?: number | string;
}

const StepBox = ({ color, index, absoluteIndex }: Props) => {
  return (
    <div
      className="w-[40px] h-[40px] border-2 border-solid border-black flex flex-row justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {index === 1 || index === 14 ? (
        <GrStarOutline size={25} />
      ) : (
        absoluteIndex
      )}
    </div>
  );
};

StepBox.defaultProps = {
  color: "inherit",
  index: null,
  absoluteIndex: 0,
};

export default StepBox;
