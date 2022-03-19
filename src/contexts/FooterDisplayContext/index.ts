import { createContext, Dispatch, SetStateAction } from "react";

type FooterFocusContextType = {
  isFocus: boolean;
  setIsFocus: Dispatch<SetStateAction<boolean>>;
};

export const FooterFocusContext = createContext({} as FooterFocusContextType);
