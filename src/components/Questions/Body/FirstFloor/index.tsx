/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import openImage from "../../../../Images/open.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const wrapperStyle = css`
  display: flex;
  align-items: end;
  justify-content: center;
  background-color: #202020;
  height: calc(100vh - 150px);
  background: #fff;
`;
const iconWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #5ac45e;
  border-bottom: 3px solid #519c53;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  width: 100px;
  height: 100px;
  margin: 0 0 50px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:active {
    border-bottom: 0px solid #519c53;
    margin: 3px 0 50px;
  }
`;
const iconStyle = css`
  object-fit: contain;
  width: 80%;
`;

export function FirstFloor() {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/escaped");
  }, [navigate]);

  return (
    <div css={wrapperStyle} id="1f">
      <div css={iconWrapperStyle} onClick={handleClick}>
        <img src={openImage} alt="open" css={iconStyle} />
      </div>
    </div>
  );
}
