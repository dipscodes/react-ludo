interface Props {
  className?: string;
  id: string;
}

const DieSimulator = ({ className, id }: Props) => {
  return (
    <div
      id={id}
      className={`w-[240px] h-[240px] min-w-[240px] min-h-[240px] flex flex-row flex-wrap absolute ${className}`}
    >
      {Array(64)
        .fill(true)
        .map((item, index) => {
          return (
            <div className="w-[30px] h-[30px] min-w-[30px] min-h-[30px] border-2 border-solid border-black flex flex-row justify-center items-center">
              {index + 1}
            </div>
          );
        })}
    </div>
  );
};

DieSimulator.defaultProps = {
  className: "",
};

export default DieSimulator;
