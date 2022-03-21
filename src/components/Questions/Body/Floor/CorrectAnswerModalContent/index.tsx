/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Dispatch, SetStateAction, useContext } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { IsClearedContext } from "../../../../../contexts/isClearedContext";

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

export function CorrectAnswerModalContent(props: PropsType) {
  const { setIsModalOpen } = props;
  const { isCleared } = useContext(IsClearedContext);
  const { b10fIsCleared } = isCleared;

  return (
    <div css={wrapperStyle}>
      <h3 css={titleStyle}>正解です！</h3>
      <div css={discriptionStyle}>
        {b10fIsCleared ? "1階を目指しましょう！" : "次の階に進みましょう！"}
      </div>
      <div css={iconWrapperStyle} onClick={() => setIsModalOpen(false)}>
        <ClearIcon />
      </div>
    </div>
  );
}
