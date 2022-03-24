/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { TwitterIcon, TwitterShareButton } from "react-share";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

export function PostScript() {
  return (
    <div css={wrapperStyle}>
      <div>
        <p>プレイしていただき、ありがとうございました！</p>
        <p>クリア報告、感想などツイートしていただけると嬉しいです！</p>
      </div>
      <TwitterShareButton
        title={"地下のエレベーターから無事に脱出することが出来ました！"}
        url={window.location.host}
        hashtags={["地下エレベーターからの脱出", "まになぞ"]}
      >
        <TwitterIcon size={32} round />
        Twitterでシェア(urlはデプロイ後に取得)
      </TwitterShareButton>
    </div>
  );
}
