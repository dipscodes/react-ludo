import { IPlayerJSON, IReferee } from "../Interfaces";

/**
 * Backend change
 */
class Referee implements IReferee {
  gameState: IPlayerJSON[];
  constructor(gameJSON: IPlayerJSON[]) {
    this.gameState = gameJSON;
  }
  move(playerNumber: number, pieceNumber: number, steps: number) {}
}

export default Referee;
