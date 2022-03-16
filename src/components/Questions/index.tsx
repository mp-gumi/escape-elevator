/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";

export function Questions() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
