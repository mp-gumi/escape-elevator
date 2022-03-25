/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
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

export function IncorrectAnswerModalContent(props: PropsType) {
  const { setIsModalOpen } = props;

  return (
    <div css={wrapperStyle}>
      <h3 css={titleStyle}>不正解です</h3>
      <div css={discriptionStyle}>もう一度考えてみてください</div>
      <CloseIcon setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
