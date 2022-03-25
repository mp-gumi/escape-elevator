/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import ClearIcon from "@mui/icons-material/Clear";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const iconWrapperStyle = css`
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

export function CloseIcon(props: Props) {
  const { setIsModalOpen } = props;

  return (
    <div css={iconWrapperStyle} onClick={() => setIsModalOpen(false)}>
      <ClearIcon />
    </div>
  );
}
