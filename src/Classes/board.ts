import { IBoard, IPlayerJSON, IReferee } from "../Interfaces";
import PlayerSet from "./playerSet";

class Board extends PlayerSet implements IBoard {
  referee: IReferee;
  turn: number;

  constructor(
    playerList: number[],
    gameJSON: IPlayerJSON[],
    irlPlayerNameList: string[],
    referee: IReferee
  ) {
    super(playerList, gameJSON, irlPlayerNameList);
    this.referee = referee;
    this.turn = playerList[0];
    this.addTurnToDice();
  }

  /**
   * Updates player turn
   */
  updateTurn(): void {}

  addTurnToDice(): void {
    console.log(this.turn, this.players[this.turn].irlPlayerName);
    const promise = new Promise((resolve) => {
      const die = document.getElementById(
        `${this.turn}-dice`
      ) as HTMLDivElement;

      if (die) {
        die.addEventListener("click", () => {
          resolve(
            `${this.players[this.turn].irlPlayerName}'s die was clicked!`
          );
        });
      } else {
        console.log("die isn't renedered");
        // setTimeout(() => {
        //   this.addTurnToDice();
        // }, 1000);
      }
    });

    promise.then((result) => {
      console.log(result);
    });
  }

  addTurnToPieces(): void {}

  giveTurnToPlayer(): void {}

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
