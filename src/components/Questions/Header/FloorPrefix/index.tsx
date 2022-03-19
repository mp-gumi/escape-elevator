/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnswersContext } from "../../../../contexts/AnswersContext";

const squareSize = 70;

const wrapperStyle = css`
  width: ${squareSize.toString()}px;
  height: ${squareSize.toString()}px;
  overflow: hidden;
`;
const innerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Serif Display", serif;
  font-size: 48px;
  font-weight: bold;
  background: #c0c0c0;
  width: ${squareSize.toString()}px;
  height: ${squareSize.toString()}px;
  user-select: none;
`;
const roofColor = css`
  color: #ff654c;
`;
const basementColor = css`
  color: #00a3ff;
`;

const mutablePrefix = () => {
  return (
    <Swiper
      direction="vertical"
      initialSlide={2}
      width={squareSize}
      height={squareSize}
    >
      <SwiperSlide>
        <div css={[innerStyle, roofColor]}>R</div>
      </SwiperSlide>
      <SwiperSlide>
        <div css={[innerStyle]}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div css={[innerStyle, basementColor]}>B</div>
      </SwiperSlide>
    </Swiper>
  );
};

export function FloorPrefix() {
  const { b10fAnswer } = useContext(AnswersContext);

  return (
    <div css={wrapperStyle}>
      {Boolean(b10fAnswer) ? (
        mutablePrefix()
      ) : (
        <div css={[innerStyle, basementColor]}>B</div>
      )}
    </div>
  );
}
