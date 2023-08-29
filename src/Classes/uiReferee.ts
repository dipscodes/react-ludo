import { IPlayerJSON, IReferee } from "../Interfaces";

/**
 * Backend change
 */
class UIReferee implements IReferee {
  gameState: { players: IPlayerJSON[] } & { turn: number };
  constructor(gameJSON: { players: IPlayerJSON[] } & { turn: number }) {
    this.gameState = gameJSON;
  }
  move(playerNumber: number, pieceNumber: number, steps: number) {}
}

export default UIReferee;
