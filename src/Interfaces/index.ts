interface IBoard {
  playerCount: number[];
  players: IPlayer[];
  gameJSON: object;
}

interface IPlayer {
  color: number;
  pieceCount: number;
  pieces: IPiece[];
  die: number;
  move(steps: number): void;
}

interface IPiece {
  color: number;
  index: number;
}

interface IReferee {
  gameState: object;
  cut(piece1: IPiece, piece2: IPiece): void;
}

export type { IBoard, IPlayer, IPiece, IReferee };
