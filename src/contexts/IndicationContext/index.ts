import { createContext, Dispatch, SetStateAction } from "react";

type IndicationContextType = {
  floorIndication: string;
  setFloorIndication: Dispatch<SetStateAction<string>>;
};

export const IndicationContext = createContext({} as IndicationContextType);
