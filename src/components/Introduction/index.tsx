/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Epilogue } from "./Epilogue";
import { Explanation } from "./Explanation";
import StartButton from "./StartButton";

const wrapperStyle = css`
  background: rgba(25, 118, 210, 0.2);
  padding: 20px;
  min-height: 100vh;
`;
const titleStyle = css`
  font-size: 24px;
  text-align: center;
  background: #1976d2;
  color: #fff;
  padding: 10px 0;
`;
const explanationStyle = css`
  font-size: 20px;
  text-align: center;
  background: #1976d2;
  color: #fff;
  padding: 10px 0;
`;
const buttonWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export function Introduction() {
  return (
    <div css={wrapperStyle}>
      <h1 css={titleStyle}>地下エレベーターからの脱出</h1>
      <Epilogue />
      <h2 css={explanationStyle}>説明</h2>
      <Explanation />
      <div css={buttonWrapperStyle}>
        <StartButton />
      </div>
    </div>
  );
}
