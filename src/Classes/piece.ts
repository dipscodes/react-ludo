import { IPiece, IReferee } from "../Interfaces";

class Piece implements IPiece {
  color: number;
  index = -1;

  constructor(color: number, referee: IReferee) {
    this.color = color;
  }
}

export default Piece;
