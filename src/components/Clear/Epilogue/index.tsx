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
const lastTextStyle = css`
  text-align: center;
  padding: 15px 0 10px;
`;

export function Epilogue() {
  return (
    <div css={wrapperStyle}>
      <p>
        1階に到着し、扉が開くと、このビルのオーナーである私の友人が立っていた。
      </p>
      <p>
        「誕生日おめでとう！今日１発目の謎解きは楽しんでもらえたかな？この後も色んな謎解きを用意してあるから、早速会場に向かおう！」
      </p>
      <p>
        「今度はちゃんと上に行けるといいな」と思いながら、彼と共にエレベーターに乗り込むのであった。
      </p>
      <p css={lastTextStyle}>〜 Fin 〜</p>
    </div>
  );
}
