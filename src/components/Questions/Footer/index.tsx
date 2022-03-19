/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { FloorButton } from "./FloorButton";
import { useContext } from "react";
import { AnswersContext } from "../../../contexts/AnswersContext";

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

export function Footer() {
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
    // b10fAnswer,
  } = useContext(AnswersContext);

  return (
    <div css={wrapperStyle}>
      <div css={buttonsWrapperStyle}>
        <div css={buttonStyle}>
          <FloorButton floorLabel="1" disabled={false} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel="2" disabled={!Boolean(b1fAnswer)} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel="3" disabled={!Boolean(b2fAnswer)} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel="4" disabled={!Boolean(b3fAnswer)} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel="5" disabled={!Boolean(b4fAnswer)} />
        </div>
      </div>
      <div css={buttonsWrapperStyle}>
        <div css={buttonStyle}>
          <FloorButton floorLabel="6" disabled={!Boolean(b5fAnswer)} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel="7" disabled={!Boolean(b6fAnswer)} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel="8" disabled={!Boolean(b7fAnswer)} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel="9" disabled={!Boolean(b8fAnswer)} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel="10" disabled={!Boolean(b9fAnswer)} />
        </div>
      </div>
    </div>
  );
}
