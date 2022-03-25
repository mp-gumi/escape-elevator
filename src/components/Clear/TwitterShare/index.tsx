/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { TwitterIcon, TwitterShareButton } from "react-share";

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  background: rgb(0, 172, 237);
  color: #fff;
  width: 160px;
  height: 32px;
  border-radius: 16px;
  font-size: 14px;
`;
const buttonWrapperStyle = css`
  display: flex;
  align-items: center;
`;
const textStyle = css`
  padding-right: 8px;
`;

export function TwitterShare() {
  return (
    <div css={wrapperStyle}>
      <TwitterShareButton
        title={"エレベーターから無事に脱出することができました！"}
        url={window.location.host}
        hashtags={["地下エレベーターからの脱出", "まになぞ"]}
        css={buttonWrapperStyle}
      >
        <TwitterIcon size={32} round />
        <div css={textStyle}>Twitterでシェア</div>
        {/* (urlはデプロイ後に取得) */}
      </TwitterShareButton>
    </div>
  );
}
