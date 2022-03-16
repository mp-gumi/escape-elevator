/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Epilogue } from "./Epilogue";
import { Explanation } from "./Explanation";
import { useNavigate } from "react-router-dom";

const startButtonStyle = css`
  border: 1px solid #000;
  width: 160px;
`;

export function Introduction() {
  const navigate = useNavigate();

  return (
    <div>
      <Epilogue />
      <Explanation />
      <div css={startButtonStyle} onClick={() => navigate("/elevator")}>
        謎解きを始める
      </div>
    </div>
  );
}
