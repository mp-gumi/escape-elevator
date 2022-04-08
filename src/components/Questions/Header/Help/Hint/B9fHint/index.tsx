/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import { useCallback, useState } from "react";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const red = css`
  color: #ff654c;
`;
const blue = css`
  color: #00a3ff;
`;

export default function B9fHint() {
  const [is1Open, setIs1Open] = useState(false);
  const [is2Open, setIs2Open] = useState(false);
  const [is3Open, setIs3Open] = useState(false);
  const [is4Open, setIs4Open] = useState(false);

  const handleChange = useCallback((state, setState) => {
    setState(!state);
  }, []);

  return (
    <div css={wrapperStyle}>
      <Accordion onChange={() => handleChange(is1Open, setIs1Open)}>
        <AccordionSummary>ヒント①　{is1Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          <span css={red}>赤色</span>
          の丸と
          <span css={blue}>青色</span>
          の丸が表しているものを左の図から探しましょう。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is2Open, setIs2Open)}>
        <AccordionSummary>ヒント②　{is2Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          <span css={red}>赤色</span>
          のものは８文字、
          <span css={blue}>青色</span>
          のものは６文字で、最初の４文字が共通しているようです。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is3Open, setIs3Open)}>
        <AccordionSummary>ヒント③　{is3Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          <span css={red}>赤色</span>
          は「エレベーター」を、
          <span css={blue}>青色</span>
          は「11」を表しています。丸に当てはまる表記を考えましょう。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is4Open, setIs4Open)}>
        <AccordionSummary>最終ヒント　{is4Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>「elevator」「eleven」が入ります。</AccordionDetails>
      </Accordion>
    </div>
  );
}
