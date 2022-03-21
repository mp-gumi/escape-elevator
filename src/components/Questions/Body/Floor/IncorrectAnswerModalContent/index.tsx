/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import ClearIcon from "@mui/icons-material/Clear";

type PropsType = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;
const titleStyle = css``;
const discriptionStyle = css`
  font-size: 12px;
  margin-bottom: 10px;
`;
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

export function IncorrectAnswerModalContent(props: PropsType) {
  const { setIsModalOpen } = props;

  return (
    <div css={wrapperStyle}>
      <h3 css={titleStyle}>不正解です</h3>
      <div css={discriptionStyle}>もう一度考えてみてください</div>
      <div css={iconWrapperStyle} onClick={() => setIsModalOpen(false)}>
        <ClearIcon />
      </div>
    </div>
  );
}
