import { IPlayer } from "../Interfaces";
import Player from "./player";

class PlayerSet {
  playerList: number[];
  players: IPlayer[];

  constructor(playerList: number[]) {
    this.playerList = playerList;

    this.players = this.playerList.map((value) => {
      return new Player(value);
    });
  }
}

export default PlayerSet;
