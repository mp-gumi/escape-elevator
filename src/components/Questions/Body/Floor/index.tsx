/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { ChangeEvent, useCallback, useContext } from "react";
import { FooterFocusContext } from "../../../../contexts/FooterDisplayContext";
import { AnswersContext } from "../../../../contexts/AnswersContext";
import { IsClearedContext } from "../../../../contexts/isClearedContext";

type Props = {
  floorImage: string;
  floorLabel:
    | "b1f"
    | "b2f"
    | "b3f"
    | "b4f"
    | "b5f"
    | "b6f"
    | "b7f"
    | "b8f"
    | "b9f"
    | "b10f";
  answersList: string[];
  answer: string;
};

const wrapperStyle = css`
  display: flex;
  align-items: center;
  height: 120vh;
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

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (answersList.indexOf(answer.toLowerCase()) === -1) {
        if (Boolean(storage.getItem(`${floorLabel}Answer`))) {
          return;
        }
        //間違えたときの処理を記述
        console.log("間違いです");
        return;
      }

      //正解したときの処理を記述
      switch (floorLabel) {
        case "b1f":
          setIsCleared({ ...isCleared, b1fIsCleared: true });
          break;
        case "b2f":
          setIsCleared({ ...isCleared, b2fIsCleared: true });
          break;
        case "b3f":
          setIsCleared({ ...isCleared, b3fIsCleared: true });
          break;
        case "b4f":
          setIsCleared({ ...isCleared, b4fIsCleared: true });
          break;
        case "b5f":
          setIsCleared({ ...isCleared, b5fIsCleared: true });
          break;
        case "b6f":
          setIsCleared({ ...isCleared, b6fIsCleared: true });
          break;
        case "b7f":
          setIsCleared({ ...isCleared, b7fIsCleared: true });
          break;
        case "b8f":
          setIsCleared({ ...isCleared, b8fIsCleared: true });
          break;
        case "b9f":
          setIsCleared({ ...isCleared, b9fIsCleared: true });
          break;
        case "b10f":
          setIsCleared({ ...isCleared, b10fIsCleared: true });
      }
      storage.setItem(`${floorLabel}Answer`, `${answer}`);
      console.log("正解です");
    },
    [answer, answersList, floorLabel, isCleared, setIsCleared]
  );

  const inputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      switch (floorLabel) {
        case "b1f":
          setAnswers({ ...answers, b1fAnswer: event.currentTarget.value });
          break;
        case "b2f":
          setAnswers({ ...answers, b2fAnswer: event.currentTarget.value });
          break;
        case "b3f":
          setAnswers({ ...answers, b3fAnswer: event.currentTarget.value });
          break;
        case "b4f":
          setAnswers({ ...answers, b4fAnswer: event.currentTarget.value });
          break;
        case "b5f":
          setAnswers({ ...answers, b5fAnswer: event.currentTarget.value });
          break;
        case "b6f":
          setAnswers({ ...answers, b6fAnswer: event.currentTarget.value });
          break;
        case "b7f":
          setAnswers({ ...answers, b7fAnswer: event.currentTarget.value });
          break;
        case "b8f":
          setAnswers({ ...answers, b8fAnswer: event.currentTarget.value });
          break;
        case "b9f":
          setAnswers({ ...answers, b9fAnswer: event.currentTarget.value });
          break;
        case "b10f":
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
    <div css={wrapperStyle}>
      <div css={innerStyle} id={`${floorLabel}`}>
        <div>
          <img src={floorImage} alt={floorLabel} css={imageStyle} />
        </div>
        <div css={inputFieldWrapperStyle}>
          <input
            type="text"
            placeholder="解答を入力してください"
            name={floorLabel}
            value={answer}
            onChange={inputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            css={inputFieldStyle}
            id="answerFormID"
          />
          <div onClick={handleClick} css={checkTextStyle}>
            確認
          </div>
        </div>
      </div>
    </div>
  );
}
