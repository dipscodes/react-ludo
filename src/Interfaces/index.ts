interface IBoard extends IPlayerSet {
  playerList: number[];
  gameJSON: object;
  play(): void;
  start(): void;
  save(): void;
  quit(): void;
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
  referee: IReferee;
}

interface IReferee {
  gameState: object;
  cut(piece1: IPiece, piece2: IPiece): void;
}

interface IPlayerSet {
  playerList: number[];
  players: IPlayer[];
  referee: IReferee;
}

interface IPieceSet {
  pieces: IPiece[];
  referee: IReferee;
}

export type { IBoard, IPlayer, IPiece, IReferee, IPlayerSet, IPieceSet };
