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
  width: 95%;
`;

export default function B6fHint() {
  const [is1Open, setIs1Open] = useState(false);
  const [is2Open, setIs2Open] = useState(false);
  const [is3Open, setIs3Open] = useState(false);

  const handleChange = useCallback((state, setState) => {
    setState(!state);
  }, []);

  return (
    <div css={wrapperStyle}>
      <Accordion onChange={() => handleChange(is1Open, setIs1Open)}>
        <AccordionSummary>ヒント①　{is1Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          左と右で、昇降に使われているものはそれぞれ何でしょうか？
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is2Open, setIs2Open)}>
        <AccordionSummary>ヒント②　{is2Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          ３つの文字は、それぞれ、a(エー)、β(ベータ)、s(エス)です。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is3Open, setIs3Open)}>
        <AccordionSummary>ヒント③　{is3Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          それぞれの建物のフロアに、「エレベーター」「エスカレーター」を上から１文字ずつ当てはめましょう。
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
