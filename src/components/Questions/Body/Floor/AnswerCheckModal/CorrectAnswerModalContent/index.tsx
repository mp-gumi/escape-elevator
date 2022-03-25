/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Dispatch, SetStateAction, useContext } from "react";
import { IsClearedContext } from "../../../../../../contexts/isClearedContext";
import { CloseIcon } from "../../../../../CloseIcon";

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
      <CloseIcon setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
