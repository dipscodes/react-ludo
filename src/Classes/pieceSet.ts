import { IPiece, IPieceSet } from "../Interfaces";
import Piece from "./piece";

class PieceSet implements IPieceSet {
  pieceCount = 4;
  pieces: IPiece[];

  constructor() {
    const length: number = this.pieceCount;
    this.pieces = Array.from({ length }, (_, index) => 0 + index * 1).map(
      (value, i) => new Piece(i)
    );
  }
}

export default PieceSet;
