import { useEffect, useMemo, useState } from "react";
import { ColorContext, GameBoardContext } from "../context";
import Display from "./Display";
import Board from "../Classes/board";
import Referee from "../Classes/referee";
import gameJSON from "../GameJSON";
import { IBoard, IReferee } from "../Interfaces";

const BrowserWindow = () => {
  const [colors, setColors] = useState({
    0: "rgb(239, 68, 68)",
    1: "rgb(34, 197, 94)",
    2: "rgb(234, 179, 8)",
    3: "rgb(37, 99, 235)",
  });
  const referee: IReferee = new Referee(gameJSON);
  const board: IBoard = new Board(
    [0, 1, 2, 3],
    gameJSON,
    ["Ichigo", "Aizen", "Urahara", "Ulquiorra"],
    referee
  );
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

  useEffect(() => {
    gameBoard.play();
  });

  return (
    <ColorContext.Provider value={colorContextValue}>
      <GameBoardContext.Provider value={boardContextValue}>
        <div className="w-screen h-screen bg-slate-800 overflow-y-scroll">
          <Display />
        </div>
      </GameBoardContext.Provider>
    </ColorContext.Provider>
  );
};

export default BrowserWindow;
