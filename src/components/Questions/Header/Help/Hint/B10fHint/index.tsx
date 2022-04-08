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
          <span css={blue}>青の矢印</span>(<span css={blue}>↑</span>)と
          <span css={red}>赤の矢印</span>(<span css={red}>↓</span>)
          に従って指を動かすと、RとBはどの位置に移動するでしょうか？
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is2Open, setIs2Open)}>
        <AccordionSummary>ヒント②　{is2Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          <span css={pink}>ピンク色</span>の枠内に、合計で4つの単語ができます。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is3Open, setIs3Open)}>
        <AccordionSummary>ヒント③　{is3Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          左側の丸には「AT」が入り、「RAT」「BAT」を表します。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is4Open, setIs4Open)}>
        <AccordionSummary>最終ヒント　{is4Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          右側
          <span css={blue}>青色</span>
          のイラストは、「バウンド」を表します。
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
