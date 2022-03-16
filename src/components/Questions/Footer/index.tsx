/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

const wrapperStyle = css`
  position: sticky;
  bottom: 0;
  display: flex;
  background: #000;
  width: 100%;
  height: 100px;
`;

export function Footer() {
  return <div css={wrapperStyle}></div>;
}
