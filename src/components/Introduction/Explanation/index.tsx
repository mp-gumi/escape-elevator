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
      <li>１Fにたどり着き、エレベーターのドアを開けばクリアとなります。</li>
      <li>答えは全て存在する言葉になります。</li>
      <li>
        幸いにもエレベーター内は電波が通じるようです。分からないことがあれば調べて構いません。
      </li>
      <li>
        解答はどんな表記で入力いただいても大丈夫ですが、あまり一般的でない表記だと誤答になってしまうかもしれません。
      </li>
      <li>右上にある「？」 を押すとヒントを閲覧することができます。</li>
      <li>
        推奨機種はスマートフォン及びタブレット、推奨ブラウザはGoogle
        Chromeです。 これら以外の機種、ブラウザを使用する場合、
        <strong>正常にプレイできない可能性</strong>
        があります。あらかじめご了承ください。
      </li>
      <li>
        問題及びシステムの不具合は、
        <a href="https://twitter.com/mp_nazo">作者のTwitter</a>
        のDMにお願いします。
      </li>
    </ul>
  );
}
