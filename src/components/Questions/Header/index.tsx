/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { FloorIndication } from "./FloorIndication";
import { FloorPrefix } from "./FloorPrefix";
import Help from "./Help";

const wrapperStyle = css`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: #000;
  width: 100%;
  height: 100px;
  z-index: 10;
  max-width: 600px;
`;
const innerWrapper = css`
  position: absolute;
  right: 20px;
`;

export function Header() {
  return (
    <div css={wrapperStyle}>
      <FloorPrefix />
      <FloorIndication />
      <div css={innerWrapper}>
        <Help />
      </div>
    </div>
  );
}
