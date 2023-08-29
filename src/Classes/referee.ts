import { IPlayerJSON, IReferee } from "../Interfaces";

/**
 * Backend change
 */
class Referee implements IReferee {
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

export default Referee;
