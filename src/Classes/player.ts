import { IPlayer } from "../Interfaces";
import PieceSet from "./pieceSet";

class Player extends PieceSet implements IPlayer {
  color = -1;
  pieceCount = 4;
  die = -1;

  constructor(color: number) {
    super();
    this.color = color;
  }

  move(steps: number): void {}
}

export default Player;
