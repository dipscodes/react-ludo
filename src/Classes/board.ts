import { IBoard } from "../Interfaces";
import PlayerSet from "./playerSet";

class Board extends PlayerSet implements IBoard {
  playerList: number[];
  gameJSON: object;

  constructor(playerList: number[], gameJSON: object) {
    super(playerList);
    this.playerList = playerList;
    this.gameJSON = gameJSON;
  }
}

export default Board;
