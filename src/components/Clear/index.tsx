/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "@emotion/react";
import { PostScript } from "./PostScript";
import { Prologue } from "./Prologue";

export function Clear() {
  return (
    <div>
      <Prologue />
      <PostScript />
    </div>
  );
}
