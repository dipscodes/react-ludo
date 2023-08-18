import { useMemo, useState } from "react";
import { ColorContext, GameBoardContext } from "../context";
import Display from "./Display";
import Board from "../Classes/board";
import Referee from "../Classes/referee";
import gameJSON from "../Classes/base.json";

const BrowserWindow = () => {
  const [colors, setColors] = useState({
    0: "rgb(239, 68, 68)",
    1: "rgb(34, 197, 94)",
    2: "rgb(234, 179, 8)",
    3: "rgb(37, 99, 235)",
  });

  const referee = new Referee();
  const board = new Board([0, 2], referee, gameJSON);

  // console.log((board.gameJSON as any).player1.pieces[3].color); // proper type of base.json add proper interface

  const [gameBoard, setGameBoard] = useState(board);

  const colorContextValue = useMemo(() => {
    return {
      colors,
      setColors,
    };
  }, [colors, setColors]);

  const boardContextValue = useMemo(() => {
    return {
      gameBoard,
      setGameBoard,
    };
  }, [gameBoard, setGameBoard]);

  return (
    <ColorContext.Provider value={colorContextValue}>
      <GameBoardContext.Provider value={boardContextValue}>
        <div className="w-screen h-screen bg-slate-400 overflow-y-scroll">
          <Display />
        </div>
      </GameBoardContext.Provider>
    </ColorContext.Provider>
  );
};

export default BrowserWindow;
