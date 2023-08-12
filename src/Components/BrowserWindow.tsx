import { useMemo, useState } from "react";
import { ColorContext } from "../context";
import Display from "./Display";

const BrowserWindow = () => {
  const [color, setColor] = useState({
    red: "rgb(239, 68, 68)",
    green: "rgb(34, 197, 94)",
    blue: "rgb(37, 99, 235)",
    yellow: "rgb(234, 179, 8)",
  });

  const contextValue = useMemo(() => {
    return {
      color,
      setColor,
    };
  }, [color, setColor]);

  return (
    <ColorContext.Provider value={contextValue}>
      <div className="w-screen h-screen bg-slate-400 overflow-y-scroll">
        <Display />
      </div>
    </ColorContext.Provider>
  );
};

export default BrowserWindow;
