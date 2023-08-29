interface Props {
  className?: string;
  id: string;
  player: number;
}

const DieSimulator = ({ className, id, player }: Props) => {
  const setDieFace = (index: number, player: number) => {
    const die = document.getElementById(`${player}-dice`);
    if (die) die.setAttribute("data-face", `${index + 1}`);
  };
  return (
    <div
      id={id}
      className={`w-[240px] h-[240px] min-w-[240px] min-h-[240px] flex flex-row flex-wrap absolute ${className} text-slate-700`}
    >
      {Array(64)
        .fill(true)
        .map((item, index) => {
          return (
            <div
              key={index}
              className="w-[30px] h-[30px] min-w-[30px] min-h-[30px] border-2 border-solid border-black flex flex-row justify-center items-center cursor-pointer"
              onClick={() => setDieFace(index, player)}
            >
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
