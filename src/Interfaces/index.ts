interface IBoard extends IPlayerSet {
  playerList: number[];
  gameJSON: object;
}

interface IPlayer extends IPieceSet {
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

interface IPlayerSet {
  playerList: number[];
  players: IPlayer[];
}

interface IPieceSet {
  pieces: IPiece[];
}

export type { IBoard, IPlayer, IPiece, IReferee, IPlayerSet, IPieceSet };
