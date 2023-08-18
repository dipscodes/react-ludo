import { IBoard, IPlayer, IReferee } from "../Interfaces";
import Player from "./player";

class Board implements IBoard {
  playerCount: number[];
  players: IPlayer[];
  gameJSON: object;

  constructor(playerCount: number[], referee: IReferee, gameJSON: object) {
    if (playerCount.length >= 2 && playerCount.length <= 4) {
      this.playerCount = playerCount;
    } else {
      throw new Error("Invalid number of players :");
    }

    this.gameJSON = gameJSON;
    const length: number = playerCount.length;
    this.players = Array.from({ length }, (_, index) => 0 + index * 1).map(
      (value, i) => new Player(i, referee)
    );
  }
}

export default Board;
