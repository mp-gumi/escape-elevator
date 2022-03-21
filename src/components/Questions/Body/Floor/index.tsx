/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { ChangeEvent, useCallback, useContext, useMemo, useState } from "react";
import { FooterFocusContext } from "../../../../contexts/FooterDisplayContext";
import { AnswersContext } from "../../../../contexts/AnswersContext";
import { IsClearedContext } from "../../../../contexts/isClearedContext";
import { ModalWindow } from "../../../ModalWindow";
import { IncorrectAnswerModalContent } from "./IncorrectAnswerModalContent";
import { CorrectAnswerModalContent } from "./CorrectAnswerModalContent";

type Props = {
  floorImage: string;
  floorLabel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  answersList: string[];
  answer: string;
};

const wrapperStyle = css`
  display: flex;
  align-items: center;
  background-color: #202020;
`;
const innerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  height: 65vh;
`;
const imageStyle = css`
  object-fit: contain;
  width: 100%;
`;
const checkTextStyle = css`
  color: #fff;
  margin: 10px;
`;
const inputFieldWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const inputFieldStyle = css`
  background: #fff;
`;

const storage = window.localStorage;

export function Floor(props: Props) {
  const { floorImage, floorLabel, answersList, answer } = props;
  const { setIsFocus } = useContext(FooterFocusContext);
  const { answers, setAnswers } = useContext(AnswersContext);
  const { isCleared, setIsCleared } = useContext(IsClearedContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const numberOfClearedFloors = useMemo(
    () => Object.values(isCleared).filter(Boolean).length,
    [isCleared]
  );

  const floorHeight = css`
    height: ${floorLabel === 1 ? "100vh" : "120vh"};
  `;

  const handleClick = useCallback(() => {
    if (answersList.indexOf(answer.toLowerCase()) === -1) {
      if (Boolean(storage.getItem(`b${floorLabel}fAnswer`))) {
        return;
      }
      //間違えたときの処理を記述
      setIsCorrectAnswer(false);
      setIsModalOpen(true);
      return;
    }

    //正解したときの処理を記述
    if (numberOfClearedFloors >= floorLabel) return;
    switch (floorLabel) {
      case 1:
        setIsCleared({ ...isCleared, b1fIsCleared: true });
        break;
      case 2:
        setIsCleared({ ...isCleared, b2fIsCleared: true });
        break;
      case 3:
        setIsCleared({ ...isCleared, b3fIsCleared: true });
        break;
      case 4:
        setIsCleared({ ...isCleared, b4fIsCleared: true });
        break;
      case 5:
        setIsCleared({ ...isCleared, b5fIsCleared: true });
        break;
      case 6:
        setIsCleared({ ...isCleared, b6fIsCleared: true });
        break;
      case 7:
        setIsCleared({ ...isCleared, b7fIsCleared: true });
        break;
      case 8:
        setIsCleared({ ...isCleared, b8fIsCleared: true });
        break;
      case 9:
        setIsCleared({ ...isCleared, b9fIsCleared: true });
        break;
      case 10:
        setIsCleared({ ...isCleared, b10fIsCleared: true });
    }
    storage.setItem(`b${floorLabel}fAnswer`, `${answer}`);
    setIsCorrectAnswer(true);
    setIsModalOpen(true);
  }, [
    answer,
    answersList,
    floorLabel,
    isCleared,
    numberOfClearedFloors,
    setIsCleared,
  ]);

  const inputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      switch (floorLabel) {
        case 1:
          setAnswers({ ...answers, b1fAnswer: event.currentTarget.value });
          break;
        case 2:
          setAnswers({ ...answers, b2fAnswer: event.currentTarget.value });
          break;
        case 3:
          setAnswers({ ...answers, b3fAnswer: event.currentTarget.value });
          break;
        case 4:
          setAnswers({ ...answers, b4fAnswer: event.currentTarget.value });
          break;
        case 5:
          setAnswers({ ...answers, b5fAnswer: event.currentTarget.value });
          break;
        case 6:
          setAnswers({ ...answers, b6fAnswer: event.currentTarget.value });
          break;
        case 7:
          setAnswers({ ...answers, b7fAnswer: event.currentTarget.value });
          break;
        case 8:
          setAnswers({ ...answers, b8fAnswer: event.currentTarget.value });
          break;
        case 9:
          setAnswers({ ...answers, b9fAnswer: event.currentTarget.value });
          break;
        case 10:
          setAnswers({ ...answers, b10fAnswer: event.currentTarget.value });
      }
    },
    [answers, floorLabel, setAnswers]
  );

  const handleFocus = useCallback(() => {
    if (window.innerWidth > 600) return;
    setIsFocus(true);
  }, [setIsFocus]);

  const handleBlur = useCallback(() => {
    if (window.innerWidth > 600) return;
    setIsFocus(false);
  }, [setIsFocus]);

  return (
    <div css={[wrapperStyle, floorHeight]}>
      <div css={innerStyle} id={`b${floorLabel}f`}>
        <div>
          <img src={floorImage} alt={`b${floorLabel}f`} css={imageStyle} />
        </div>
        <div css={inputFieldWrapperStyle}>
          <input
            type="text"
            placeholder="解答を入力してください"
            name={`b${floorLabel}f`}
            value={answer}
            onChange={inputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            css={inputFieldStyle}
            id="answerFormID"
          />
          <button onClick={handleClick} css={checkTextStyle}>
            確認
          </button>
        </div>
      </div>
      <ModalWindow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isCorrectAnswer ? (
          <CorrectAnswerModalContent setIsModalOpen={setIsModalOpen} />
        ) : (
          <IncorrectAnswerModalContent setIsModalOpen={setIsModalOpen} />
        )}
      </ModalWindow>
    </div>
  );
}
