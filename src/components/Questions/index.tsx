/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";

const wrapperStyle = css`
  width: 100%;
`;

export function Questions() {
  return (
    <div css={wrapperStyle}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
