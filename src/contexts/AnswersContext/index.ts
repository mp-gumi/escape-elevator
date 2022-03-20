import { createContext, Dispatch, SetStateAction } from "react";

export type AnswersType = {
  b1fAnswer: string;
  b2fAnswer: string;
  b3fAnswer: string;
  b4fAnswer: string;
  b5fAnswer: string;
  b6fAnswer: string;
  b7fAnswer: string;
  b8fAnswer: string;
  b9fAnswer: string;
  b10fAnswer: string;
};

type AnswersContextType = {
  answers: AnswersType;
  setAnswers: Dispatch<SetStateAction<AnswersType>>;
};

export const AnswersContext = createContext({} as AnswersContextType);
