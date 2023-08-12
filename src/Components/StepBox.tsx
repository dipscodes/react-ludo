interface Props {
  color?: string;
}

const StepBox = ({ color }: Props) => {
  return (
    <div
      className="w-[40px] h-[40px] border-2 border-solid border-black"
      style={{ backgroundColor: color }}
    ></div>
  );
};

StepBox.defaultProps = {
  color: "white",
};

export default StepBox;
