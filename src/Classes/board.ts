import { IBoard, IPlayerJSON, IReferee } from "../Interfaces";
import PlayerSet from "./playerSet";

class Board extends PlayerSet implements IBoard {
  referee: IReferee;
  currentTurn: number;

  constructor(
    playerList: number[],
    gameJSON: IPlayerJSON[],
    irlPlayerNameList: string[],
    referee: IReferee
  ) {
    super(playerList, gameJSON, irlPlayerNameList);
    this.referee = referee;
    this.currentTurn = playerList[0];
  }

  /**
   * Updates player turn
   */
  updateTurn(turn: number): void {
    this.currentTurn = turn;
  }

  addTurnToDice(): Promise<number> {
    const promise = new Promise<number>((resolve) => {
      const die = document.getElementById(
        `${this.currentTurn}-dice`
      ) as HTMLDivElement;

      if (die) {
        die.addEventListener("click", () => {
          resolve(parseInt(die.getAttribute("data-face") as string));
        });
      } else {
        console.log("die isn't renedered");
      }
    });

    return promise;
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
  async play() {
    while (true) {
      const temp = await this.addTurnToDice();
      this.updateTurn((this.currentTurn + 1) % this.playerCount);
      console.log(temp);
    }
  }
  start(): void {}
  save(): void {}
  quit(): void {}
}

export default Board;
