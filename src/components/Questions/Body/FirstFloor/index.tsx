/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

const wrapperStyle = css`
  display: flex;
  align-items: center;
  background-color: #202020;
  height: 100vh;
  background: #fff;
`;

export function FirstFloor() {
  return (
    <div css={wrapperStyle} id="1f">
      出る
    </div>
  );
}
