import { AnswersContext } from "./AnswersContext";
import { IndicationContext } from "./IndicationContext";
import { FooterFocusContext } from "./FooterDisplayContext";
import { useState } from "react";

type ChildrenType = {
  children: React.ReactNode;
};

const initialAnswers = (label: string): string => {
  return window.localStorage.getItem(`${label}Answer`) || "";
};

export function Contexts({ children }: ChildrenType) {
  const [b1fAnswer, setB1fAnswer] = useState(initialAnswers("b1f"));
  const [b2fAnswer, setB2fAnswer] = useState(initialAnswers("b2f"));
  const [b3fAnswer, setB3fAnswer] = useState(initialAnswers("b3f"));
  const [b4fAnswer, setB4fAnswer] = useState(initialAnswers("b4f"));
  const [b5fAnswer, setB5fAnswer] = useState(initialAnswers("b5f"));
  const [b6fAnswer, setB6fAnswer] = useState(initialAnswers("b6f"));
  const [b7fAnswer, setB7fAnswer] = useState(initialAnswers("b7f"));
  const [b8fAnswer, setB8fAnswer] = useState(initialAnswers("b8f"));
  const [b9fAnswer, setB9fAnswer] = useState(initialAnswers("b9f"));
  const [b10fAnswer, setB10fAnswer] = useState(initialAnswers("b10f"));
  const [floorIndication, setFloorIndication] = useState("1");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <AnswersContext.Provider
      value={{
        b1fAnswer,
        setB1fAnswer,
        b2fAnswer,
        setB2fAnswer,
        b3fAnswer,
        setB3fAnswer,
        b4fAnswer,
        setB4fAnswer,
        b5fAnswer,
        setB5fAnswer,
        b6fAnswer,
        setB6fAnswer,
        b7fAnswer,
        setB7fAnswer,
        b8fAnswer,
        setB8fAnswer,
        b9fAnswer,
        setB9fAnswer,
        b10fAnswer,
        setB10fAnswer,
      }}
    >
      <IndicationContext.Provider
        value={{ floorIndication, setFloorIndication }}
      >
        <FooterFocusContext.Provider value={{ isFocus, setIsFocus }}>
          {children}
        </FooterFocusContext.Provider>
      </IndicationContext.Provider>
    </AnswersContext.Provider>
  );
}
