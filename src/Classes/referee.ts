import { IPiece, IPlayerJSON, IReferee } from "../Interfaces";

class Referee implements IReferee {
  gameState: IPlayerJSON[];
  constructor(gameJSON: IPlayerJSON[]) {
    this.gameState = gameJSON;
  }
  cut(piece1: IPiece, piece2: IPiece): void {}
}

export default Referee;
