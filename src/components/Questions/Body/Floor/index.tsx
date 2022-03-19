/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  floorImage: string;
  floorLabel: string;
  answersList: string[];
  answer: string;
  setAnswer: Dispatch<SetStateAction<string>>;
};

const wrapperStyle = css`
  display: flex;
  align-items: center;
  height: 100vh;
`;
const innerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  background-color: #202020;
  padding-bottom: 50px;
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
  const { floorImage, floorLabel, answersList, answer, setAnswer } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (answersList.indexOf(answer.toLowerCase()) === -1) {
      if (storage.getItem(floorLabel) === "clear") {
        return;
      }
      //間違えたときの処理を記述
      console.log("間違いです");
      return;
    }
    // storage.setItem(floorLabel, "clear");
    storage.setItem(`${floorLabel}Answer`, `${answer.toLocaleLowerCase()}`);
    console.log("正解です");
  };

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.currentTarget.value);
  };

  return (
    <div css={wrapperStyle} id={`${floorLabel}`}>
      <div css={innerStyle}>
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
            css={inputFieldStyle}
          />
          <div onClick={handleClick} css={checkTextStyle}>
            確認
          </div>
        </div>
      </div>
    </div>
  );
}
