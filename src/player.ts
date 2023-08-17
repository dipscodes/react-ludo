interface IPlayer {
  color: number;
  pieceCount: number;
  piece0: number;
  piece1: number;
  piece2: number;
  piece3: number;
  die: number;
  move(steps: number): void;
}

class Player implements IPlayer {
  readonly color = -1;
  pieceCount = 4;
  piece0 = -1;
  piece1 = -2;
  piece2 = -3;
  piece3 = -4;
  die = -1;
  move(steps: number): void {}
}

export default Player;
