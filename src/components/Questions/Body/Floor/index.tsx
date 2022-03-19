/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
} from "react";
import { FooterFocusContext } from "../../../../contexts/FooterDisplayContext";

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
  const { isFocus, setIsFocus } = useContext(FooterFocusContext);

  const paddingBottom = css`
    padding-bottom: ${isFocus ? 0 : "50px"};
  `;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (answersList.indexOf(answer.toLowerCase()) === -1) {
        if (storage.getItem(floorLabel) === "clear") {
          return;
        }
        //間違えたときの処理を記述
        console.log("間違いです");
        return;
      }
      storage.setItem(`${floorLabel}Answer`, `${answer}`);
      console.log("正解です");
    },
    [answer, answersList, floorLabel]
  );

  const inputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAnswer(event.currentTarget.value);
    },
    [setAnswer]
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
    <div css={wrapperStyle} id={`${floorLabel}`}>
      <div css={[innerStyle, paddingBottom]}>
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
