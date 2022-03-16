/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import { Floor } from "./Floor";
import b1f from "../../../Images/b1f.png";
import b2f from "../../../Images/b2f.png";
import b3f from "../../../Images/b3f.png";
import b4f from "../../../Images/b4f.png";
import b5f from "../../../Images/b5f.png";
import b6f from "../../../Images/b6f.png";
import b7f from "../../../Images/b7f.png";
import b8f from "../../../Images/b8f.png";
import b9f from "../../../Images/b9f.png";
import b10f from "../../../Images/b10f.png";
import { useState } from "react";

const b1fAnswersList = ["pencil", "鉛筆", "ペンシル", "ぺんしる"];

export function Body() {
  const [b1fAnswer, setB1fAnswer] = useState("");
  return (
    <div>
      <Floor
        floorImage={b1f}
        floorLabel="b1f"
        answersList={b1fAnswersList}
        answer={b1fAnswer}
        setAnswer={setB1fAnswer}
      />
    </div>
  );
}
