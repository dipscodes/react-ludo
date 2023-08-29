import { IPlayerJSON, IReferee } from "../Interfaces";

/**
 * Backend change
 */
class UIReferee implements IReferee {
  gameState: { players: IPlayerJSON[] } & {
    turn: number | null;
    roll: number | null;
  };
  constructor(
    gameJSON: { players: IPlayerJSON[] } & {
      turn: number | null;
      roll: number | null;
    }
  ) {
    this.gameState = gameJSON;
  }
  move(playerNumber: number, pieceNumber: number, steps: number) {}
}

export default UIReferee;
