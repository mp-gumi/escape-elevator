/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { FloorButton } from "./FloorButton";
import { useContext } from "react";
import { IsClearedContext } from "../../../contexts/isClearedContext";

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
    // b10fIsCleared,
  } = isCleared;

  return (
    <div css={wrapperStyle}>
      <div css={buttonsWrapperStyle}>
        <div css={buttonStyle}>
          <FloorButton floorLabel={1} disabled={false} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel={2} disabled={!b1fIsCleared} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel={3} disabled={!b2fIsCleared} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel={4} disabled={!b3fIsCleared} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel={5} disabled={!b4fIsCleared} />
        </div>
      </div>
      <div css={buttonsWrapperStyle}>
        <div css={buttonStyle}>
          <FloorButton floorLabel={6} disabled={!b5fIsCleared} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel={7} disabled={!b6fIsCleared} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel={8} disabled={!b7fIsCleared} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel={9} disabled={!b8fIsCleared} />
        </div>
        <div css={buttonStyle}>
          <FloorButton floorLabel={10} disabled={!b9fIsCleared} />
        </div>
      </div>
    </div>
  );
}
