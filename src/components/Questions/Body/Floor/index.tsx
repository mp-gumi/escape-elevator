/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  MouseEventHandler,
  SetStateAction,
} from "react";

type Props = {
  floorImage: string;
  floorLabel: string;
  answersList: string[];
  answer: string;
  setAnswer: Dispatch<SetStateAction<string>>;
};

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  background-color: #808080;
  height: 100vh;
`;
const imageStyle = css`
  object-fit: contain;
  width: 100vw;
`;
const inputFieldStyle = css`
  background: #fff;
`;

export function Floor(props: Props) {
  const { floorImage, floorLabel, answersList, answer, setAnswer } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (answersList.indexOf(answer.toLowerCase()) === -1) {
      //間違えたときの処理を記述
      console.log("間違いです");
      return;
    }
    console.log("正解です");
  };

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.currentTarget.value);
  };

  return (
    <div css={wrapperStyle}>
      <div>
        <img src={floorImage} alt={floorLabel} css={imageStyle} />
      </div>
      <div>
        <input
          type="text"
          placeholder="解答を入力してください"
          name={floorLabel}
          value={answer}
          onChange={inputChange}
          css={inputFieldStyle}
        />
        <div onClick={handleClick}>確認</div>
      </div>
    </div>
  );
}
