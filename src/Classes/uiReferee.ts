import { IPlayerJSON, IReferee } from "../Interfaces";

/**
 * Backend change
 */
class UIReferee implements IReferee {
  gameState: IPlayerJSON[];
  constructor(gameJSON: IPlayerJSON[]) {
    this.gameState = gameJSON;
  }
  move(playerNumber: number, pieceNumber: number, steps: number) {}
}

export default UIReferee;
