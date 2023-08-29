interface IPlayerSet {
  playerList: number[];
  players: IPlayer[];
  gameState: IPlayerJSON[];
}
interface IBoard extends IPlayerSet {
  gameState: IPlayerJSON[];
  currentTurn: number;
  referee: IReferee;
  playerCount: number;
  play(): void;
  start(): void;
  save(): void;
  quit(): void;
  updateTurn(turn: number): void;
  addTurnToDice(): Promise<number>;
  addTurnToPieces(): void;
  giveTurnToPlayer(): void;
  getPlayerList(): number[];
  getReferee(): IReferee;
  getGameState(): IPlayerJSON[];
  move(playerNumber: number, pieceNumber: number, steps: number): void;
}

interface IPlayer extends IPieceSet {
  irlPlayerName: string;
  color: number;
  pieceCount: number;
  pieces: IPiece[];
  dieFace: number;
  move(steps: number): void;
}

interface IPiece {
  color: number;
  index: number;
  isOut: boolean;
  isInHouse: boolean;
  isInPlay: boolean;
  isSafe: boolean;
  inHomeRun: boolean;
  pieceState: IPieceJSON;
}

interface IPieceJSON {
  color: number;
  index: number;
  isOut: boolean;
  isInHouse: boolean;
  isInPlay: boolean;
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
  move(playerNumber: number, pieceNumber: number, steps: number): void;
}

interface IPieceSet {
  color: number;
  pieces: IPiece[];
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
