import { createContext, Dispatch, SetStateAction } from "react";

export type IsClearedType = {
  b1fIsCleared: boolean;
  b2fIsCleared: boolean;
  b3fIsCleared: boolean;
  b4fIsCleared: boolean;
  b5fIsCleared: boolean;
  b6fIsCleared: boolean;
  b7fIsCleared: boolean;
  b8fIsCleared: boolean;
  b9fIsCleared: boolean;
  b10fIsCleared: boolean;
};

type IsClearedContextType = {
  isCleared: IsClearedType;
  setIsCleared: Dispatch<SetStateAction<IsClearedType>>;
};

export const IsClearedContext = createContext({} as IsClearedContextType);
