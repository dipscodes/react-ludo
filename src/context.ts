import { createContext, Context } from "react";

const ColorContext: Context<any> = createContext<any>({});
const StageContext: Context<any> = createContext<any>({});

export { ColorContext, StageContext };
