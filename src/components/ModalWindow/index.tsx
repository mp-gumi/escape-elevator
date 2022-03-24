/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import Modal from "@mui/material/Modal";
import { Dispatch, ReactNode, SetStateAction } from "react";

type PropsType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

const wrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const modalStyle = css`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 90vw;
  max-width: 480px;
  max-height: 85vh;
`;

export function ModalWindow(props: PropsType) {
  const { isModalOpen, setIsModalOpen, children } = props;

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      css={wrapperStyle}
    >
      <div css={modalStyle}>{children}</div>
    </Modal>
  );
}
