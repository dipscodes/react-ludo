import { IPiece, IPieceJSON } from "../Interfaces";

class Piece implements IPiece {
  color: number;
  index = -1;
  isOut = false;
  isSafe = true;
  isInHouse = true;
  isInPlay = true;
  inHomeRun = true;
  pieceState: IPieceJSON;

  constructor(color: number, pieceJSON: IPieceJSON) {
    this.color = color;
    this.pieceState = pieceJSON;
  }

  move() {}
}

export default Piece;
