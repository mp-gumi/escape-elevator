/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { useCallback, useContext, useState } from "react";
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

export function FloorPrefix() {
  const [currentPrefix, setCurrentPrefix] = useState("base");
  const { answers } = useContext(AnswersContext);
  const b10fAnswer = answers.b10fAnswer;

  console.log(currentPrefix);

  const mutablePrefix = useCallback(() => {
    return (
      <Swiper
        direction="vertical"
        initialSlide={2}
        width={squareSize}
        height={squareSize}
        onSlideChangeTransitionEnd={(swiper) => {
          switch (swiper.activeIndex) {
            case 0:
              setCurrentPrefix("roof");
              break;
            case 1:
              setCurrentPrefix("");
              break;
            case 2:
              setCurrentPrefix("base");
              break;
          }
        }}
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
  }, []);

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
