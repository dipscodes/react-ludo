import { IPiece, IPieceJSON } from "../Interfaces";

class Piece implements IPiece {
  color: number;
  index = -1;
  isOut = false;
  isSafe = true;
  inHouse = true;
  inPlay = true;
  inHomeRun = true;
  pieceState: IPieceJSON;

  constructor(color: number, pieceJSON: IPieceJSON) {
    this.color = color;
    this.pieceState = pieceJSON;
  }
}

export default Piece;
