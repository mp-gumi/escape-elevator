/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

export function Prologue() {
  return (
    <div css={wrapperStyle}>
      <h2>地下エレベーターからの脱出</h2>
      <h2>Clear!!</h2>
      <p>&#65049;</p>
      <p>
        1階に到着し、扉が開くと、このビルのオーナーである私の友人が立っていた。
      </p>
      <p>
        「誕生日おめでとう！本日１発目の謎解きは楽しんでもらえたかな？この後も色々な謎解きを用意しているから、早速会場に急ごう！」
      </p>
      <p>
        「今度はちゃんと上に行けるといいな」と思いながら、彼と共にエレベーターに乗り込むのであった。
      </p>
    </div>
  );
}
