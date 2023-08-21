interface IBoard extends IPlayerSet {
  playerList: number[];
  gameJSON: object;
  play(): void;
  start(): void;
  save(): void;
  quit(): void;
  getPlayerList(): number[];
}

interface IPlayer extends IPieceSet {
  color: number;
  pieceCount: number;
  pieces: IPiece[];
  dieFace: number;
  move(steps: number): void;
}

interface IPiece {
  color: number;
  index: number;
  referee: IReferee;
  isOut: boolean;
  inHouse: boolean;
  inPlay: boolean;
  isSafe: boolean;
  inHomeRun: boolean;
}

interface IPieceJSON {
  color: number;
  index: number;
  isOut: boolean;
  inHouse: boolean;
  inPlay: boolean;
  isSafe: boolean;
  inHomeRun: boolean;
}

interface IPlayerJSON {
  color: number;
  pieceCount: number;
  pieces: IPieceJSON[];
  dieFace: number;
  currentTurn: boolean;
}

interface IReferee {
  gameState: IPlayerJSON[];
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

export type {
  IBoard,
  IPlayer,
  IPiece,
  IReferee,
  IPlayerSet,
  IPieceSet,
  IPieceJSON,
  IPlayerJSON,
};
