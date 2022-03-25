/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

const wrapperStyle = css`
  font-size: 14px;
  line-height: 20px;
  padding: 8px 0;
  p {
    margin: 8px 0;
  }
`;

export function PostScript() {
  return (
    <div css={wrapperStyle}>
      <p>プレイしていただき、ありがとうございました！</p>
      <p>クリア報告、感想などツイートしていただけると嬉しいです！</p>
    </div>
  );
}
