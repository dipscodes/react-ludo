import { IPlayer, IReferee } from "../Interfaces";
import PieceSet from "./pieceSet";

class Player extends PieceSet implements IPlayer {
  color = -1;
  pieceCount = 4;
  dieFace = -1;
  referee: IReferee;

  constructor(color: number, referee: IReferee) {
    super(referee);
    this.color = color;
    this.referee = referee;
  }

  move(steps: number): void {}
}

export default Player;
