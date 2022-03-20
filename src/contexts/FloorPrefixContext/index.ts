import { createContext, Dispatch, SetStateAction } from "react";

export type FloorPrefixType = "roof" | "" | "base";

type FloorPrefixContextType = {
  floorPrefix: FloorPrefixType;
  setFloorPrefix: Dispatch<SetStateAction<FloorPrefixType>>;
};

export const FloorPrefixContext = createContext({} as FloorPrefixContextType);
