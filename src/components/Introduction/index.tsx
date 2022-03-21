/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Epilogue } from "./Epilogue";
import { Explanation } from "./Explanation";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const startButtonStyle = css`
  border: 1px solid #000;
  width: 160px;
`;

export function Introduction() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/elevator");
  }, [navigate]);

  return (
    <div>
      <Epilogue />
      <Explanation />
      <div css={startButtonStyle} onClick={handleClick}>
        謎解きを始める
      </div>
    </div>
  );
}
