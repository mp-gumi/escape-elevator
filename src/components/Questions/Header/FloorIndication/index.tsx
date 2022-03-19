/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import floor1 from "../../../../Images/indication_1f.png";
import floor2 from "../../../../Images/indication_2f.png";
import floor3 from "../../../../Images/indication_3f.png";
import floor4 from "../../../../Images/indication_4f.png";
import floor5 from "../../../../Images/indication_5f.png";
import floor6 from "../../../../Images/indication_6f.png";
import floor7 from "../../../../Images/indication_7f.png";
import floor8 from "../../../../Images/indication_8f.png";
import floor9 from "../../../../Images/indication_9f.png";
import floor10 from "../../../../Images/indication_10f.png";
import { useCallback, useContext } from "react";
import { IndicationContext } from "../../../../contexts/IndicationContext";

const wrapperStyle = css`
  height: 70px;
`;
const imageStyle = css`
  object-fit: contain;
  height: 100%;
`;

export function FloorIndication() {
  const { floorIndication } = useContext(IndicationContext);

  const floorImages = useCallback(() => {
    switch (floorIndication) {
      case "b1f":
        return <img src={floor1} alt="current floor" css={imageStyle} />;
      case "b2f":
        return <img src={floor2} alt="current floor" css={imageStyle} />;
      case "b3f":
        return <img src={floor3} alt="current floor" css={imageStyle} />;
      case "b4f":
        return <img src={floor4} alt="current floor" css={imageStyle} />;
      case "b5f":
        return <img src={floor5} alt="current floor" css={imageStyle} />;
      case "b6f":
        return <img src={floor6} alt="current floor" css={imageStyle} />;
      case "b7f":
        return <img src={floor7} alt="current floor" css={imageStyle} />;
      case "b8f":
        return <img src={floor8} alt="current floor" css={imageStyle} />;
      case "b9f":
        return <img src={floor9} alt="current floor" css={imageStyle} />;
      case "b10f":
        return <img src={floor10} alt="current floor" css={imageStyle} />;
    }
  }, [floorIndication]);

  return <div css={wrapperStyle}>{floorImages()}</div>;
}
