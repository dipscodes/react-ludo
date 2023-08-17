interface Props {
  color?: string;
  index?: number;
}

const StepBox = ({ color, index }: Props) => {
  return (
    <div
      className="w-[40px] h-[40px] border-2 border-solid border-black flex flex-row justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {index}
    </div>
  );
};

StepBox.defaultProps = {
  color: "white",
  index: null,
};

export default StepBox;
