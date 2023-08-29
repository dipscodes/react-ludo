interface IPlayerSet {
  playerList: number[];
  players: IPlayer[];
  gameState: { players: IPlayerJSON[] } & {
    turn: number | null;
    roll: number | null;
  };
}
interface IBoard extends IPlayerSet {
  gameState: { players: IPlayerJSON[] } & {
    turn: number | null;
    roll: number | null;
  };
  referee: IReferee;
  playerCount: number;
  play(): void;
  start(): void;
  save(): void;
  quit(): void;
  passTurn(pass: boolean): void;
  rollDice(): Promise<number>;
  addTurnToPieces(): void;
  giveTurnToPlayer(): void;
  removeRollDicEventListener(): void;

  getPlayerList(): number[];
  getReferee(): IReferee;
  getGameState(): { players: IPlayerJSON[] } & {
    turn: number | null;
    roll: number | null;
  };
  get getCurrentTurn(): number;
  set setCurrentTurn(currentTurn: number);
  get getOnGoing(): boolean;
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
  gameState: { players: IPlayerJSON[] } & {
    turn: number | null;
    roll: number | null;
  };
  move(playerNumber: number, pieceNumber: number, steps: number): void;
}

interface IPieceSet {
  color: number;
  pieces: IPiece[];
}

type gameState = { players: IPlayerJSON[] } & {
  turn: number | null;
  roll: number | null;
};

export type {
  IBoard,
  IPlayer,
  IPiece,
  IReferee,
  IPlayerSet,
  IPieceSet,
  IPieceJSON,
  IPlayerJSON,
  gameState,
};
