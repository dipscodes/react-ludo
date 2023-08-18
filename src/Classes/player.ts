import { IPiece, IPlayer, IReferee } from "../Interfaces";
import Piece from "./piece";

class Player implements IPlayer {
  color = -1;
  pieceCount = 4;
  pieces: IPiece[];
  die = -1;

  constructor(color: number, referee: IReferee) {
    this.color = color;
    const length: number = this.pieceCount;
    this.pieces = Array.from({ length }, (_, index) => 0 + index * 1).map(
      (value, i) => new Piece(i, referee)
    );
  }

  move(steps: number): void {}
}

export default Player;
