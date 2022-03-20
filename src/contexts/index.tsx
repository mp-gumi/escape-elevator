import { useState } from "react";
import { AnswersContext } from "./AnswersContext";
import { IndicationContext } from "./IndicationContext";
import { FooterFocusContext } from "./FooterDisplayContext";
import { IsClearedContext } from "./isClearedContext";
import { FloorPrefixContext, FloorPrefixType } from "./FloorPrefixContext";

type ChildrenType = {
  children: React.ReactNode;
};

const initialAnswers = (label: string): string => {
  return window.localStorage.getItem(`${label}Answer`) || "";
};
const initialIsCleared = (label: string): boolean => {
  return Boolean(window.localStorage.getItem(`${label}Answer`));
};

export function Contexts({ children }: ChildrenType) {
  const [answers, setAnswers] = useState({
    b1fAnswer: initialAnswers("b1f"),
    b2fAnswer: initialAnswers("b2f"),
    b3fAnswer: initialAnswers("b3f"),
    b4fAnswer: initialAnswers("b4f"),
    b5fAnswer: initialAnswers("b5f"),
    b6fAnswer: initialAnswers("b6f"),
    b7fAnswer: initialAnswers("b7f"),
    b8fAnswer: initialAnswers("b8f"),
    b9fAnswer: initialAnswers("b9f"),
    b10fAnswer: initialAnswers("b10f"),
  });
  const [floorIndication, setFloorIndication] = useState("b1f");
  const [isFocus, setIsFocus] = useState(false);
  const [isCleared, setIsCleared] = useState({
    b1fIsCleared: initialIsCleared("b1f"),
    b2fIsCleared: initialIsCleared("b2f"),
    b3fIsCleared: initialIsCleared("b3f"),
    b4fIsCleared: initialIsCleared("b4f"),
    b5fIsCleared: initialIsCleared("b5f"),
    b6fIsCleared: initialIsCleared("b6f"),
    b7fIsCleared: initialIsCleared("b7f"),
    b8fIsCleared: initialIsCleared("b8f"),
    b9fIsCleared: initialIsCleared("b9f"),
    b10fIsCleared: initialIsCleared("b10f"),
  });
  const [floorPrefix, setFloorPrefix] = useState<FloorPrefixType>("base");

  return (
    <AnswersContext.Provider
      value={{
        answers,
        setAnswers,
      }}
    >
      <IndicationContext.Provider
        value={{ floorIndication, setFloorIndication }}
      >
        <FooterFocusContext.Provider value={{ isFocus, setIsFocus }}>
          <IsClearedContext.Provider value={{ isCleared, setIsCleared }}>
            <FloorPrefixContext.Provider
              value={{ floorPrefix, setFloorPrefix }}
            >
              {children}
            </FloorPrefixContext.Provider>
          </IsClearedContext.Provider>
        </FooterFocusContext.Provider>
      </IndicationContext.Provider>
    </AnswersContext.Provider>
  );
}
