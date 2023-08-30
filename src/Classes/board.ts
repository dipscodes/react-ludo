import { IBoard, IReferee, gameState } from "../Interfaces";
import PlayerSet from "./playerSet";

type OnRollCallBack = (this: HTMLDivElement, ev: MouseEvent) => any;

class Board extends PlayerSet implements IBoard {
  referee: IReferee;
  private currentTurn: number;
  private onGoing: boolean;
  private rollDiceEventListener: OnRollCallBack | null;

  constructor(
    playerList: number[],
    gameJSON: gameState,
    irlPlayerNameList: string[],
    referee: IReferee
  ) {
    super(playerList, gameJSON, irlPlayerNameList);
    this.referee = referee;
    this.currentTurn = 0;
    this.onGoing = true;

    this.rollDiceEventListener = null;
  }

  get getCurrentTurn(): number {
    return this.currentTurn;
  }
  set setCurrentTurn(currentTurn: number) {
    this.currentTurn = currentTurn;
  }

  get getOnGoing(): boolean {
    return this.onGoing;
  }

  getPlayerList(): number[] {
    return this.playerList;
  }

  getReferee(): IReferee {
    return this.referee;
  }

  getGameState(): gameState {
    return this.gameState;
  }

  passTurn(pass: boolean): void {
    if (pass)
      this.setCurrentTurn = (this.getCurrentTurn + 1) % this.playerCount;
  }

  rollDice(): Promise<number> {
    return new Promise<number>((resolve) => {
      const dice = document.getElementById(
        `${this.playerList[this.getCurrentTurn]}-dice`
      ) as HTMLDivElement;

      console.log(
        `${this.playerList[this.getCurrentTurn]}-dice`,
        " was promised."
      );

      const onRollCallBack: OnRollCallBack = () => {
        resolve(parseInt(dice.getAttribute("data-face") as string));
        dice.removeEventListener("click", onRollCallBack);
      };

      if (dice) {
        dice.addEventListener("click", onRollCallBack);
      } else {
        console.log("die isn't renedered");
      }
    });
  }

  removeRollDicEventListener(): void {
    const dice = document.getElementById(
      `${this.playerList[this.getCurrentTurn]}-dice`
    ) as HTMLDivElement;

    if (dice && this.rollDiceEventListener) {
      dice.removeEventListener("click", this.rollDiceEventListener);
    } else {
      console.log("die isn't renedered");
    }
  }

  addTurnToPieces(): void {}

  giveTurnToPlayer(): void {}

  move(playerNumber: number, pieceNumber: number, steps: number): void {
    this.referee.move(playerNumber, pieceNumber, steps);
  }

  async play() {
    while (this.onGoing) {
      const roll = await this.rollDice();
      /**
       * referee.updateRoll(roll)
       * referee.update() // based on turn and roll update necessary objects
       * referee.getCurrentPlay() // which pieces to attach event
       * method to attach events and feedback in ui
       * await click on pieces
       * on click get results and change in ui
       * referee.update() // based on result update necessary objects and return pass or keep
       * this.passTurn(pass/keep) // based on pass or keep
       * referee.updateTurn(this.currentTurn) // update current turn
       */
      this.passTurn(true);
      console.log(roll);
    }
  }
  start(): void {}
  save(): void {}
  quit(): void {}
}

export default Board;
