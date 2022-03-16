/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { FloorIndication } from "./FloorIndication";
import { FloorPrefix } from "./FloorPrefix";

const wrapperStyle = css`
  position: sticky;
  top: 0;
  display: flex;
  background: #fff;
  width: 100%;
  height: 100px;
  z-index: 10;
`;

export function Header() {
  return (
    <div css={wrapperStyle}>
      <FloorPrefix />
      <FloorIndication />
    </div>
  );
}
