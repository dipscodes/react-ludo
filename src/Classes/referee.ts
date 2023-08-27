import { IPlayerJSON, IReferee } from "../Interfaces";

class Referee implements IReferee {
  gameState: IPlayerJSON[];
  constructor(gameJSON: IPlayerJSON[]) {
    this.gameState = gameJSON;
  }
  move(playerNumber: number, pieceNumber: number, steps: number) {}
}

export default Referee;
