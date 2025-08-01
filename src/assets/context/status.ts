import { createContext, type Dispatch, type SetStateAction } from "react";

export type StateType = [string, Dispatch<SetStateAction<string>>];

export const StatusContext = createContext<StateType>(['', () => {}])

export const AlertContext = createContext<StateType>(['', () => {}])