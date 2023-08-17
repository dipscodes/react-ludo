import { useMemo, useState } from "react";
import { ColorContext, StageContext } from "../context";
import Display from "./Display";

const BrowserWindow = () => {
  const [colors, setColors] = useState({
    0: "rgb(239, 68, 68)",
    1: "rgb(34, 197, 94)",
    2: "rgb(234, 179, 8)",
    3: "rgb(37, 99, 235)",
  });

  const [stage, setStage] = useState({
    0: {
      die: -1,
      0: -1,
      1: -2,
      2: -3,
      3: -4,
    },
    1: {
      die: -1,
      0: -1,
      1: -2,
      2: -3,
      3: -4,
    },
    2: {
      die: -1,
      0: -1,
      1: -2,
      2: -3,
      3: -4,
    },
    3: {
      die: -1,
      0: -1,
      1: -2,
      2: -3,
      3: -4,
    },
  });

  const colorContextValue = useMemo(() => {
    return {
      colors,
      setColors,
    };
  }, [colors, setColors]);

  const stageContextValue = useMemo(() => {
    return {
      stage,
      setStage,
    };
  }, [stage, setStage]);

  return (
    <ColorContext.Provider value={colorContextValue}>
      <StageContext.Provider value={stageContextValue}>
        <div className="w-screen h-screen bg-slate-400 overflow-y-scroll">
          <Display />
        </div>
      </StageContext.Provider>
    </ColorContext.Provider>
  );
};

export default BrowserWindow;
