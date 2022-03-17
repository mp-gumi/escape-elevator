/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { FloorButton } from "./FloorButton";

const footerHeight = 150;
const gap = 10;

const wrapperStyle = css`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: ${gap}px;
  background: linear-gradient(
    45deg,
    #757575 0%,
    #9e9e9e 65%,
    #e0e0e0 80%,
    #9e9e9e 95%,
    #757575 99% 100%
  );
  padding: ${gap}px;
  width: 100%;
  height: ${footerHeight}px;
  z-index: 10;
  max-width: 600px;
`;

const buttonStyle = css`
  width: calc((${footerHeight}px - (${gap}px * 3)) / 2);
  height: calc((${footerHeight}px - (${gap}px * 3)) / 2);
`;
const buttonsWrapperStyle = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const answerStorage = window.localStorage;

export function Footer() {
  return (
    <div css={wrapperStyle}>
      <div css={buttonsWrapperStyle}>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="1"
            disabled={answerStorage.getItem("b1f") !== "clear"}
          />
        </div>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="2"
            disabled={answerStorage.getItem("b2f") !== "clear"}
          />
        </div>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="3"
            disabled={answerStorage.getItem("b3f") !== "clear"}
          />
        </div>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="4"
            disabled={answerStorage.getItem("b4f") !== "clear"}
          />
        </div>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="5"
            disabled={answerStorage.getItem("b5f") !== "clear"}
          />
        </div>
      </div>
      <div css={buttonsWrapperStyle}>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="6"
            disabled={answerStorage.getItem("b6f") !== "clear"}
          />
        </div>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="7"
            disabled={answerStorage.getItem("b7f") !== "clear"}
          />
        </div>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="8"
            disabled={answerStorage.getItem("b8f") !== "clear"}
          />
        </div>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="9"
            disabled={answerStorage.getItem("b9f") !== "clear"}
          />
        </div>
        <div css={buttonStyle}>
          <FloorButton
            floorLabel="10"
            disabled={answerStorage.getItem("b10f") !== "clear"}
          />
        </div>
      </div>
    </div>
  );
}
