/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

const wrapperStyle = css`
  font-size: 14px;
  line-height: 20px;
  padding: 8px 0;
  li {
    margin: 8px 0 8px 16px;
  }
`;

export function Explanation() {
  return (
    <ul css={wrapperStyle}>
      <li>１Fにたどり着くとクリアです。</li>
      <li>
        解答はどんな表記で入力いただいても構いませんが、あまり一般的でない表記だと誤答になってしまうかもしれません。
      </li>
      <li>
        右上にある「？」
        を押すとヒントを閲覧することが出来ます。ヒントは、謎解きを進めると追加されていきます。
      </li>
    </ul>
  );
}
