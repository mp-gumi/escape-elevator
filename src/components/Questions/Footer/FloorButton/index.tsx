/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Link } from "react-scroll";
import { useCallback, useContext } from "react";
import { IndicationContext } from "../../../../contexts/IndicationContext";

type Props = {
  floorLabel: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
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
  color: #4d4d4d;
`;

export function FloorButton(props: Props) {
  const { floorLabel, disabled } = props;
  const { setFloorIndication } = useContext(IndicationContext);

  const handleSetActive = useCallback(() => {
    setFloorIndication(`b${floorLabel}f`);
  }, [floorLabel, setFloorIndication]);

  return disabled ? (
    <div css={[buttonStyle, disableButtonColor]}>{floorLabel}</div>
  ) : (
    <Link
      to={`b${floorLabel}f`}
      smooth={true}
      spy={true}
      onSetActive={handleSetActive}
    >
      <div
        css={[buttonStyle, disabled ? disableButtonColor : enableButtonColor]}
      >
        {floorLabel}
      </div>
    </Link>
  );
}
