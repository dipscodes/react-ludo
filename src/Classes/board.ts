import { IBoard, IPlayer, IReferee } from "../Interfaces";
import Player from "./player";

class Board implements IBoard {
  playerList: number[];
  players: IPlayer[];
  gameJSON: object;

  constructor(playerList: number[], referee: IReferee, gameJSON: object) {
    if (playerList.length >= 2 && playerList.length <= 4) {
      this.playerList = playerList;
    } else {
      throw new Error("Invalid number of players :");
    }

    this.gameJSON = gameJSON;
    const length: number = playerList.length;
    this.players = Array.from({ length }, (_, index) => 0 + index * 1).map(
      (value, i) => new Player(i, referee)
    );
  }

  getPlayerList() {
    return this.playerList;
  }
}

export default Board;
