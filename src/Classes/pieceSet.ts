import { IPiece, IPieceJSON, IPieceSet } from "../Interfaces";
import Piece from "./piece";

class PieceSet implements IPieceSet {
  pieceCount = 4;
  pieces: IPiece[];
  color: number;

  constructor(color: number, pieceSetJSON: IPieceJSON[]) {
    const length: number = this.pieceCount;
    this.pieces = Array.from({ length }, (_, index) => 0 + index * 1).map(
      (value, i) => new Piece(color, pieceSetJSON[i])
    );
    this.color = color;
  }
}

export default PieceSet;
