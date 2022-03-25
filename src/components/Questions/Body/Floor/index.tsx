/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { useState } from "react";
import { ModalWindow } from "../../../ModalWindow";
import AnswerCheckModal from "./AnswerCheckModal";
import Button from "@mui/material/Button";

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
const buttonWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  .MuiButton-root {
    background: #fff;
    color: #000;
  }
`;

export function Floor(props: Props) {
  const { floorImage, floorLabel, answersList, answer } = props;

  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  const floorHeight = css`
    height: ${floorLabel === 1 ? "100vh" : "120vh"};
  `;

  return (
    <div css={[wrapperStyle, floorHeight]}>
      <div css={innerStyle} id={`b${floorLabel}f`}>
        <div>
          <img
            src={floorImage}
            alt={`b${floorLabel}fQuestion`}
            css={imageStyle}
          />
        </div>
        <div css={buttonWrapperStyle}>
          <Button
            onClick={() => setIsAnswerModalOpen(true)}
            variant="contained"
          >
            解答する
          </Button>
        </div>
      </div>
      <ModalWindow
        isModalOpen={isAnswerModalOpen}
        setIsModalOpen={setIsAnswerModalOpen}
      >
        <AnswerCheckModal
          image={floorImage}
          floorLabel={floorLabel}
          answer={answer}
          answersList={answersList}
          setIsAnswerModalOpen={setIsAnswerModalOpen}
        />
      </ModalWindow>
    </div>
  );
}
