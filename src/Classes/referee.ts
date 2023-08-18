import { IPiece, IReferee } from "../Interfaces";
import gameJSON from "./base.json";

class Referee implements IReferee {
  gameState = gameJSON;
  cut(piece1: IPiece, piece2: IPiece): void {}
}

export default Referee;
