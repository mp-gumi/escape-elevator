import { createContext, Dispatch, SetStateAction } from "react";

type AnswersContextType = {
  b1fAnswer: string;
  setB1fAnswer: Dispatch<SetStateAction<string>>;

  b2fAnswer: string;
  setB2fAnswer: Dispatch<SetStateAction<string>>;

  b3fAnswer: string;
  setB3fAnswer: Dispatch<SetStateAction<string>>;

  b4fAnswer: string;
  setB4fAnswer: Dispatch<SetStateAction<string>>;

  b5fAnswer: string;
  setB5fAnswer: Dispatch<SetStateAction<string>>;

  b6fAnswer: string;
  setB6fAnswer: Dispatch<SetStateAction<string>>;

  b7fAnswer: string;
  setB7fAnswer: Dispatch<SetStateAction<string>>;

  b8fAnswer: string;
  setB8fAnswer: Dispatch<SetStateAction<string>>;

  b9fAnswer: string;
  setB9fAnswer: Dispatch<SetStateAction<string>>;

  b10fAnswer: string;
  setB10fAnswer: Dispatch<SetStateAction<string>>;
};

export const AnswersContext = createContext({} as AnswersContextType);
