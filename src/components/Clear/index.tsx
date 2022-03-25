/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { PostScript } from "./PostScript";
import { Prologue } from "./Prologue";
import { TwitterShare } from "./TwitterShare";

const wrapperStyle = css`
  background: rgba(25, 118, 210, 0.2);
  padding: 20px;
  min-height: 100vh;
`;
const titleStyle = css`
  text-align: center;
  background: #1976d2;
  color: #fff;
  padding: 10px 0;
`;
const buttonStyle = css`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export function Clear() {
  return (
    <div css={wrapperStyle}>
      <div css={titleStyle}>
        <h2>地下エレベーターからの脱出</h2>
        <h2>Clear!!</h2>
      </div>
      <Prologue />
      <hr />
      <PostScript />
      <div css={buttonStyle}>
        <TwitterShare />
      </div>
    </div>
  );
}
