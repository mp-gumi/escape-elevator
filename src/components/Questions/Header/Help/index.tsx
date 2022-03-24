/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useCallback, useState } from "react";
import { ModalWindow } from "../../../ModalWindow";
import Hint from "./Hint";

const iconWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;
const iconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #969696;
  font-size: 28px;
`;

export default function Help() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  return (
    <div>
      <div css={iconWrapperStyle} onClick={handleClick}>
        <HelpOutlineIcon fontSize="inherit" css={iconStyle} />
      </div>
      <ModalWindow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Hint setIsModalOpen={setIsModalOpen} />
      </ModalWindow>
    </div>
  );
}
