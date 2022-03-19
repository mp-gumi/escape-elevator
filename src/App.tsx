/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Contexts } from "./contexts";
import { Routes } from "./routes";

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const innerStyle = css`
  max-width: 600px;
`;

function App() {
  return (
    <div css={wrapperStyle}>
      <div css={innerStyle}>
        <Contexts>
          <Routes />
        </Contexts>
      </div>
    </div>
  );
}

export default App;
