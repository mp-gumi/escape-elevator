/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Link } from "react-scroll";
import { useCallback, useContext, useMemo, useState } from "react";
import { IndicationContext } from "../../../../contexts/IndicationContext";
import { FloorPrefixContext } from "../../../../contexts/FloorPrefixContext";

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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
const disableButtonStyle = css`
  color: #4d4d4d;
`;

export function FloorButton(props: Props) {
  const { floorLabel, disabled } = props;
  const { floorIndication, setFloorIndication } = useContext(IndicationContext);
  const { floorPrefix } = useContext(FloorPrefixContext);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = useCallback(() => {
    if (floorIndication === `b${floorLabel}f`) return;
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  }, [floorIndication, floorLabel]);

  const activeButtonColor = useMemo(
    () => (isClicked ? "#eda413" : "#fff"),
    [isClicked]
  );
  const enableButtonStyle = css`
    color: ${activeButtonColor};
  `;

  const handleSetActive = useCallback(() => {
    setFloorIndication(`b${floorLabel}f`);
  }, [floorLabel, setFloorIndication]);

  const button = useCallback(() => {
    switch (floorPrefix) {
      case "base":
        return disabled ? (
          <div css={[buttonStyle, disableButtonStyle]}>{floorLabel}</div>
        ) : (
          <Link
            to={`b${floorLabel}f`}
            offset={-100}
            smooth={true}
            spy={true}
            onSetActive={handleSetActive}
          >
            <div css={[buttonStyle, enableButtonStyle]} onClick={handleClick}>
              {floorLabel}
            </div>
          </Link>
        );
      case "roof":
        return <div css={[buttonStyle, disableButtonStyle]}>{floorLabel}</div>;
      case "":
        return floorLabel === "1" ? (
          <Link
            to={"1f"}
            offset={-100}
            smooth={true}
            spy={true}
            onSetActive={handleSetActive}
          >
            <div css={[buttonStyle, enableButtonStyle]} onClick={handleClick}>
              {floorLabel}
            </div>
          </Link>
        ) : (
          <div css={[buttonStyle, disableButtonStyle]}>{floorLabel}</div>
        );
    }
  }, [
    disabled,
    enableButtonStyle,
    floorLabel,
    floorPrefix,
    handleClick,
    handleSetActive,
  ]);

  return button();
}
