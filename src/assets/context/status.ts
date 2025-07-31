import { createContext, type Dispatch, type SetStateAction } from "react";

type StatusType = [string, Dispatch<SetStateAction<string>>];

export const StatusContext = createContext<StatusType>(['', () => {}])

export const AlertContext = createContext<StatusType>(['', () => {}])