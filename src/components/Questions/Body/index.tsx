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
import b7f from "../../../Images/b7f_3.png";
import b8f from "../../../Images/b8f.png";
import b9f from "../../../Images/b9f_2.png";
import b10f from "../../../Images/b10f_2.png";
import { useContext } from "react";
import { AnswersContext } from "../../../contexts/AnswersContext";
import { IsClearedContext } from "../../../contexts/isClearedContext";
import { FloorPrefixContext } from "../../../contexts/FloorPrefixContext";
import { FirstFloor } from "./FirstFloor";

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
const b4fAnswersList = ["ビル", "びる", "building", "bill"];
const b5fAnswersList = ["cafe", "カフェ", "かふぇ"];
const b6fAnswersList = [
  "curry",
  "カレー",
  "かれー",
  "カレーライス",
  "かれーらいす",
];
const b7fAnswersList = [
  "+",
  "＋",
  "plus",
  "プラス",
  "ぷらす",
  "たす",
  "足す",
  "タス",
  "十",
  "➕",
];
const b8fAnswersList = [
  "height",
  "高さ",
  "たかさ",
  "タカサ",
  "はいと",
  "ハイト",
];
const b9fAnswersList = [
  "near",
  "近い",
  "ちかい",
  "チカイ",
  "近く",
  "ちかく",
  "チカク",
  "ニア",
  "にあ",
  "ニアー",
  "にあー",
];
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
  const { answers } = useContext(AnswersContext);
  const {
    b1fAnswer,
    b2fAnswer,
    b3fAnswer,
    b4fAnswer,
    b5fAnswer,
    b6fAnswer,
    b7fAnswer,
    b8fAnswer,
    b9fAnswer,
    b10fAnswer,
  } = answers;

  const { isCleared } = useContext(IsClearedContext);
  const {
    b1fIsCleared,
    b2fIsCleared,
    b3fIsCleared,
    b4fIsCleared,
    b5fIsCleared,
    b6fIsCleared,
    b7fIsCleared,
    b8fIsCleared,
    b9fIsCleared,
  } = isCleared;

  const { floorPrefix } = useContext(FloorPrefixContext);

  return (
    <div css={wrapperStyle}>
      {floorPrefix === "" ? <FirstFloor /> : null}
      <Floor
        floorImage={b1f}
        floorLabel={1}
        answersList={b1fAnswersList}
        answer={b1fAnswer}
      />
      {b1fIsCleared ? (
        <Floor
          floorImage={b2f}
          floorLabel={2}
          answersList={b2fAnswersList}
          answer={b2fAnswer}
        />
      ) : null}
      {b2fIsCleared ? (
        <Floor
          floorImage={b3f}
          floorLabel={3}
          answersList={b3fAnswersList}
          answer={b3fAnswer}
        />
      ) : null}
      {b3fIsCleared ? (
        <Floor
          floorImage={b4f}
          floorLabel={4}
          answersList={b4fAnswersList}
          answer={b4fAnswer}
        />
      ) : null}
      {b4fIsCleared ? (
        <Floor
          floorImage={b5f}
          floorLabel={5}
          answersList={b5fAnswersList}
          answer={b5fAnswer}
        />
      ) : null}
      {b5fIsCleared ? (
        <Floor
          floorImage={b6f}
          floorLabel={6}
          answersList={b6fAnswersList}
          answer={b6fAnswer}
        />
      ) : null}
      {b6fIsCleared ? (
        <Floor
          floorImage={b7f}
          floorLabel={7}
          answersList={b7fAnswersList}
          answer={b7fAnswer}
        />
      ) : null}
      {b7fIsCleared ? (
        <Floor
          floorImage={b8f}
          floorLabel={8}
          answersList={b8fAnswersList}
          answer={b8fAnswer}
        />
      ) : null}
      {b8fIsCleared ? (
        <Floor
          floorImage={b9f}
          floorLabel={9}
          answersList={b9fAnswersList}
          answer={b9fAnswer}
        />
      ) : null}
      {b9fIsCleared ? (
        <Floor
          floorImage={b10f}
          floorLabel={10}
          answersList={b10fAnswersList}
          answer={b10fAnswer}
        />
      ) : null}
    </div>
  );
}
