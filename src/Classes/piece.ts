import { IPiece } from "../Interfaces";

class Piece implements IPiece {
  color: number;
  index = -1;

  constructor(color: number) {
    this.color = color;
  }
}

export default Piece;
