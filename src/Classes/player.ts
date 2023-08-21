import { IPieceJSON, IPlayer } from "../Interfaces";
import PieceSet from "./pieceSet";

class Player extends PieceSet implements IPlayer {
  pieceCount = 4;
  dieFace = -1;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(color: number, pieceSetJSON: IPieceJSON[]) {
    super(color, pieceSetJSON);
  }

  move(steps: number): void {}
}

export default Player;
