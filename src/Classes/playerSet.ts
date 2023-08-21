import { IPlayer, IPlayerSet, IReferee } from "../Interfaces";
import Player from "./player";

class PlayerSet implements IPlayerSet {
  playerList: number[];
  players: IPlayer[];
  referee: IReferee;

  constructor(playerList: number[], referee: IReferee) {
    this.playerList = playerList;

    this.players = this.playerList.map((value) => {
      return new Player(value, referee);
    });
    this.referee = referee;
  }
}

export default PlayerSet;
