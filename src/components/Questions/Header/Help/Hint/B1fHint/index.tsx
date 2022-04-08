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
const pink = css`
  color: #ffa3ff;
`;

export default function B1fHint() {
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
          の部分と
          <span css={blue}>青色</span>
          の部分があり、それらが重なっている部分は
          <span css={pink}>ピンク色</span>になっています。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is2Open, setIs2Open)}>
        <AccordionSummary>ヒント②　{is2Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          <span css={red}>赤色</span>
          のイラスト同士、
          <span css={blue}>青色</span>
          のイラスト同士、それぞれ反対の意味を表す言葉になります。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is3Open, setIs3Open)}>
        <AccordionSummary>ヒント③　{is3Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          <span css={red}>赤色</span>
          のイラストは「開ける」「閉める」を、
          <span css={blue}>青色</span>
          のイラストは「勝つ」「負ける」を表しています。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is4Open, setIs4Open)}>
        <AccordionSummary>最終ヒント　{is4Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          上から、「OPEN」「CLOSE」「WIN」が入ります。
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
