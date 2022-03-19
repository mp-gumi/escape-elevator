/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Routes } from "./routes";
import { AnswersContext } from "./contexts";
import { useState } from "react";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const innerStyle = css`
  max-width: 600px;
`;
const initialAnswers = (label: string): string => {
  return window.localStorage.getItem(`${label}Answer`) || "";
};

function App() {
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

  return (
    <div css={wrapperStyle}>
      <div css={innerStyle}>
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
          <Routes />
        </AnswersContext.Provider>
      </div>
    </div>
  );
}

export default App;
