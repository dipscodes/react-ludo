import { useContext } from "react";
import { GameBoardContext } from "../context";
import Piece from "./Piece";

interface Props {
  color: string;
  player: number;
}

const PieceBed = ({ color, player }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gameBoard, setGameBoard } = useContext(GameBoardContext);
  return (
    <div className="w-1/2 h-1/2 p-4">
      <div className="w-full h-full rounded-lg border-4 border-solid border-black flex flex-row justify-center items-center">
        {gameBoard.getPlayerList().includes(player) ? (
          <Piece color={color} />
        ) : null}
      </div>
    </div>
  );
};

export default PieceBed;
