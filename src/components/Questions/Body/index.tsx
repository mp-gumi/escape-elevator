/** @jsx jsx */
/** @jsxRuntime classic */
import { css, jsx } from "@emotion/react";
import { Floor } from "./Floor";
import b1f from "../../../Images/b1f.png";
import b2f from "../../../Images/b2f.png";
import b3f from "../../../Images/b3f.png";
import b4f from "../../../Images/b4f.png";
import b5f from "../../../Images/b5f.png";
import b6f from "../../../Images/b6f.png";
import b7f from "../../../Images/b7f.png";
import b8f from "../../../Images/b8f.png";
import b9f from "../../../Images/b9f.png";
import b10f from "../../../Images/b10f.png";
import { useContext } from "react";
import { AnswersContext } from "../../../contexts";

const b1fAnswersList = [
  "pencil",
  "ペンシル",
  "ぺんしる",
  "鉛筆",
  "えんぴつ",
  "エンピツ",
];
const b2fAnswersList = ["button", "ボタン", "ぼたん", "釦"];
const b3fAnswersList = ["小児科医院", "しょうにかいいん", "ショウニカイイン"];
const b4fAnswersList = ["ビル", "びる", "building"];
const b5fAnswersList = ["cafe", "カフェ", "かふぇ"];
const b6fAnswersList = [
  "curry",
  "カレー",
  "かれー",
  "カレーライス",
  "かれーらいす",
];
const b7fAnswersList = ["助ける", "たすける", "タスケル", "助ケル", "help"];
const b8fAnswersList = ["height", "高さ", "たかさ", "タカサ"];
const b9fAnswersList = ["love", "愛", "あい", "アイ"];
const b10fAnswersList = [
  "donut",
  "ドーナツ",
  "どーなつ",
  "ドーナッツ",
  "どーなっつ",
];

const wrapperStyle = css`
  background-color: #202020;
`;

export function Body() {
  const {
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
  } = useContext(AnswersContext);

  return (
    <div css={wrapperStyle}>
      <Floor
        floorImage={b1f}
        floorLabel="b1f"
        answersList={b1fAnswersList}
        answer={b1fAnswer}
        setAnswer={setB1fAnswer}
      />
      {b1fAnswer ? (
        <Floor
          floorImage={b2f}
          floorLabel="b2f"
          answersList={b2fAnswersList}
          answer={b2fAnswer}
          setAnswer={setB2fAnswer}
        />
      ) : null}
      {b2fAnswer ? (
        <Floor
          floorImage={b3f}
          floorLabel="b3f"
          answersList={b3fAnswersList}
          answer={b3fAnswer}
          setAnswer={setB3fAnswer}
        />
      ) : null}
      {b3fAnswer ? (
        <Floor
          floorImage={b4f}
          floorLabel="b4f"
          answersList={b4fAnswersList}
          answer={b4fAnswer}
          setAnswer={setB4fAnswer}
        />
      ) : null}
      {b4fAnswer ? (
        <Floor
          floorImage={b5f}
          floorLabel="b5f"
          answersList={b5fAnswersList}
          answer={b5fAnswer}
          setAnswer={setB5fAnswer}
        />
      ) : null}
      {b5fAnswer ? (
        <Floor
          floorImage={b6f}
          floorLabel="b6f"
          answersList={b6fAnswersList}
          answer={b6fAnswer}
          setAnswer={setB6fAnswer}
        />
      ) : null}
      {b6fAnswer ? (
        <Floor
          floorImage={b7f}
          floorLabel="b7f"
          answersList={b7fAnswersList}
          answer={b7fAnswer}
          setAnswer={setB7fAnswer}
        />
      ) : null}
      {b7fAnswer ? (
        <Floor
          floorImage={b8f}
          floorLabel="b8f"
          answersList={b8fAnswersList}
          answer={b8fAnswer}
          setAnswer={setB8fAnswer}
        />
      ) : null}
      {b8fAnswer ? (
        <Floor
          floorImage={b9f}
          floorLabel="b9f"
          answersList={b9fAnswersList}
          answer={b9fAnswer}
          setAnswer={setB9fAnswer}
        />
      ) : null}
      {b9fAnswer ? (
        <Floor
          floorImage={b10f}
          floorLabel="b10f"
          answersList={b10fAnswersList}
          answer={b10fAnswer}
          setAnswer={setB10fAnswer}
        />
      ) : null}
    </div>
  );
}
