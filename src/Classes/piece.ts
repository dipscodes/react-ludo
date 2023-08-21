import { IPiece, IReferee } from "../Interfaces";

class Piece implements IPiece {
  color: number;
  referee: IReferee;
  index = -1;

  constructor(color: number, referee: IReferee) {
    this.color = color;
    this.referee = referee;
  }
}

export default Piece;
