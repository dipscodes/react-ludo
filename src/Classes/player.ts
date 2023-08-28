import { IPieceJSON, IPlayer } from "../Interfaces";
import PieceSet from "./pieceSet";

class Player extends PieceSet implements IPlayer {
  irlPlayerName: string;
  pieceCount = 4;
  dieFace = -1;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(
    color: number,
    pieceSetJSON: IPieceJSON[],
    irlPlayerName: string
  ) {
    super(color, pieceSetJSON);
    this.irlPlayerName = irlPlayerName;
  }

  move(steps: number): void {}
}

export default Player;
