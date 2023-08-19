import { createContext, Context } from "react";

const ColorContext: Context<any> = createContext<any>({});
const GameBoardContext: Context<any> = createContext<any>({});

export { ColorContext, GameBoardContext };
