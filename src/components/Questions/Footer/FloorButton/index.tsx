/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Link } from "react-scroll";

type Props = {
  floorLabel: string;
  disabled: boolean;
};

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202020;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  border: 5px solid #fff;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const enableButtonColor = css`
  color: #fff;
`;
const disableButtonColor = css`
  color: #808080;
`;

export function FloorButton(props: Props) {
  const { floorLabel, disabled } = props;

  return (
    <Link to={`b${floorLabel}f`} smooth={true}>
      <div
        css={[buttonStyle, disabled ? disableButtonColor : enableButtonColor]}
      >
        {floorLabel}
      </div>
    </Link>
  );
}
