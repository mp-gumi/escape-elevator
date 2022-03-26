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

export default function B2fHint() {
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
        <AccordionDetails>丸にはアルファベットが入ります。</AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is2Open, setIs2Open)}>
        <AccordionSummary>ヒント②　{is2Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          オレンジ色の丸が上側のイラスト、水色の丸が下側のイラストを表します。ピンク色の部分は上下で共通のようです。
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={() => handleChange(is3Open, setIs3Open)}>
        <AccordionSummary>ヒント③　{is3Open ? "▲" : "▼"}</AccordionSummary>
        <AccordionDetails>
          右側水色のイラストは、「バウンド」を表します。
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
