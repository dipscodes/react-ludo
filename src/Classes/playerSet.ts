import { IPlayer, IPlayerJSON, IPlayerSet } from "../Interfaces";
import Player from "./player";

class PlayerSet implements IPlayerSet {
  playerList: number[];
  players: IPlayer[];
  gameState: { players: IPlayerJSON[] } & { turn: number };
  playerCount: number;

  constructor(
    playerList: number[],
    gameJSON: { players: IPlayerJSON[] } & { turn: number },
    irlPlayerNameList: string[]
  ) {
    this.playerList = playerList;
    this.playerCount = playerList.length;

    this.players = this.playerList.map((color, index) => {
      return new Player(
        color,
        gameJSON.players[index].pieces,
        irlPlayerNameList[index]
      );
    });
    this.gameState = gameJSON;
  }
}

export default PlayerSet;
