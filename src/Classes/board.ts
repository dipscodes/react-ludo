import PlayerSet from "./playerSet";
class Board extends PlayerSet {
  playerList: number[];
  constructor(playerList: number[]) {
    super(playerList);
    this.playerList = playerList;
  }
}

export default Board;
