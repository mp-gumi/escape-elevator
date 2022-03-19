/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import floor1 from "../../../../Images/indication_1f.png";
// import floor2 from "../../../Images/indication_2f.png";
// import floor3 from "../../../Images/indication_3f.png";
// import floor4 from "../../../Images/indication_4f.png";
// import floor5 from "../../../Images/indication_5f.png";
// import floor6 from "../../../Images/indication_6f.png";
// import floor7 from "../../../Images/indication_7f.png";
// import floor8 from "../../../Images/indication_8f.png";
// import floor9 from "../../../Images/indication_9f.png";
// import floor10 from "../../../Images/indication_10f.png";

const wrapperStyle = css`
  height: 70px;
`;
const imageStyle = css`
  object-fit: contain;
  height: 100%;
`;

export function FloorIndication() {
  return (
    <div css={wrapperStyle}>
      <img src={floor1} alt="floor" css={imageStyle} />
    </div>
  );
}
