import { IBoard, IReferee } from "../Interfaces";
import PlayerSet from "./playerSet";

class Board extends PlayerSet implements IBoard {
  playerList: number[];
  gameJSON: object;
  referee: IReferee;

  constructor(playerList: number[], gameJSON: object, referee: IReferee) {
    super(playerList, referee);
    this.playerList = playerList;
    this.gameJSON = gameJSON;
    this.referee = referee;
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
