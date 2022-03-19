/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

const wrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Serif Display", serif;
  font-size: 48px;
  font-weight: bold;
  color: #00a3ff;
  width: 70px;
  height: 70px;
  background: #c0c0c0;
`;

export function FloorPrefix() {
  return <div css={wrapperStyle}>B</div>;
}
