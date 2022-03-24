/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { IsClearedContext } from "../../../../../contexts/isClearedContext";
import ClearIcon from "@mui/icons-material/Clear";
import B1fHint from "./B1fHint";
import B2fHint from "./B2fHint";
import B3fHint from "./B3fHint";
import B4fHint from "./B4fHint";
import B5fHint from "./B5fHint";
import B6fHint from "./B6fHint";
import B7fHint from "./B7fHint";
import B8fHint from "./B8fHint";
import B9fHint from "./B9fHint";
import B10fHint from "./B10fHint";
import LastHint from "./LastHint";

type Props = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const innerStyle = css`
  max-height: 70vh;
  overflow: scroll;
`;
const titleStyle = css`
  flex-shrink: 0;
`;
const iconWrapperStyle = css`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #969696;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  .MuiSvgIcon-root {
    color: #fff;
  }
`;

export default function Hint(props: Props) {
  const { setIsModalOpen } = props;
  const { isCleared } = useContext(IsClearedContext);
  const [isB1fOpen, setIsB1fOpen] = useState(false);
  const [isB2fOpen, setIsB2fOpen] = useState(false);
  const [isB3fOpen, setIsB3fOpen] = useState(false);
  const [isB4fOpen, setIsB4fOpen] = useState(false);
  const [isB5fOpen, setIsB5fOpen] = useState(false);
  const [isB6fOpen, setIsB6fOpen] = useState(false);
  const [isB7fOpen, setIsB7fOpen] = useState(false);
  const [isB8fOpen, setIsB8fOpen] = useState(false);
  const [isB9fOpen, setIsB9fOpen] = useState(false);
  const [isB10fOpen, setIsB10fOpen] = useState(false);
  const [isLastOpen, setIsLastOpen] = useState(false);

  const handleChange = useCallback((state, setState) => {
    setState(!state);
  }, []);

  return (
    <div css={wrapperStyle}>
      <h3 css={titleStyle}>ヒント</h3>
      <div css={innerStyle}>
        <Accordion onChange={() => handleChange(isB1fOpen, setIsB1fOpen)}>
          <AccordionSummary>B1F {isB1fOpen ? "▲" : "▼"}</AccordionSummary>
          <AccordionDetails>
            <B1fHint />
          </AccordionDetails>
        </Accordion>
        {isCleared.b1fIsCleared ? (
          <Accordion onChange={() => handleChange(isB2fOpen, setIsB2fOpen)}>
            <AccordionSummary>B2F {isB2fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B2fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b2fIsCleared ? (
          <Accordion onChange={() => handleChange(isB3fOpen, setIsB3fOpen)}>
            <AccordionSummary>B3F {isB3fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B3fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b3fIsCleared ? (
          <Accordion onChange={() => handleChange(isB4fOpen, setIsB4fOpen)}>
            <AccordionSummary>B4F {isB4fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B4fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b4fIsCleared ? (
          <Accordion onChange={() => handleChange(isB5fOpen, setIsB5fOpen)}>
            <AccordionSummary>B5F {isB5fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B5fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b5fIsCleared ? (
          <Accordion onChange={() => handleChange(isB6fOpen, setIsB6fOpen)}>
            <AccordionSummary>B6F {isB6fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B6fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b6fIsCleared ? (
          <Accordion onChange={() => handleChange(isB7fOpen, setIsB7fOpen)}>
            <AccordionSummary>B7F {isB7fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B7fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b7fIsCleared ? (
          <Accordion onChange={() => handleChange(isB8fOpen, setIsB8fOpen)}>
            <AccordionSummary>B8F {isB8fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B8fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b8fIsCleared ? (
          <Accordion onChange={() => handleChange(isB9fOpen, setIsB9fOpen)}>
            <AccordionSummary>B9F {isB9fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B9fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b9fIsCleared ? (
          <Accordion onChange={() => handleChange(isB10fOpen, setIsB10fOpen)}>
            <AccordionSummary>B10F {isB10fOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <B10fHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
        {isCleared.b10fIsCleared ? (
          <Accordion onChange={() => handleChange(isLastOpen, setIsLastOpen)}>
            <AccordionSummary>LAST {isLastOpen ? "▲" : "▼"}</AccordionSummary>
            <AccordionDetails>
              <LastHint />
            </AccordionDetails>
          </Accordion>
        ) : null}
      </div>
      <div css={iconWrapperStyle} onClick={() => setIsModalOpen(false)}>
        <ClearIcon />
      </div>
    </div>
  );
}
