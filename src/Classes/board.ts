import { IBoard, IPlayerJSON, IReferee } from "../Interfaces";
import PlayerSet from "./playerSet";

class Board extends PlayerSet implements IBoard {
  referee: IReferee;

  constructor(
    playerList: number[],
    gameJSON: IPlayerJSON[],
    referee: IReferee
  ) {
    super(playerList, gameJSON);
    this.referee = referee;
  }

  getPlayerList(): number[] {
    return this.playerList;
  }

  getReferee(): IReferee {
    return this.referee;
  }

  getGameState(): IPlayerJSON[] {
    return this.gameState;
  }

  move(playerNumber: number, pieceNumber: number, steps: number): void {
    /**
     * The referee updates the json and the pieces move the ui
     */
    this.referee.move(playerNumber, pieceNumber, steps);
  }

  /**
   * According to the gameJSON play() start the board with correct piece placement and player/piece information
   */

  play(): void {}
  start(): void {}
  save(): void {}
  quit(): void {}
}

export default Board;
