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

export default function B2fHint() {
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
          上半分の日本語の文章を英訳したものが下半分に書いてあります。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is2Open, setIs2Open)}>
        <AccordionSummary>ヒント②　{is2Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          <span css={red}>赤色</span>
          の下線部を英訳したものが
          <span css={red}>赤色</span>
          の枠に、
          <span css={blue}>青色</span>
          の下線部を英訳したものが
          <span css={blue}>青色</span>
          の枠に入ります。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is3Open, setIs3Open)}>
        <AccordionSummary>ヒント③　{is3Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          どちらの枠にも、3文字の英単語が入ります。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is4Open, setIs4Open)}>
        <AccordionSummary>最終ヒント　{is4Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          <span css={red}>赤色</span>
          の枠には"not"が、
          <span css={blue}>青色</span>
          の枠には"but"が入ります。
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
