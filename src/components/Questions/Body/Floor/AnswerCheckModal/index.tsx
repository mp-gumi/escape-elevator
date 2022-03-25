/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { IsClearedContext } from "../../../../../contexts/isClearedContext";
import { AnswersContext } from "../../../../../contexts/AnswersContext";
import { ModalWindow } from "../../../../ModalWindow";
import { CorrectAnswerModalContent } from "./CorrectAnswerModalContent";
import { IncorrectAnswerModalContent } from "./IncorrectAnswerModalContent";
import { CloseIcon } from "../../../../CloseIcon";

type Props = {
  image: string;
  floorLabel: number;
  answer: string;
  answersList: string[];
  setIsAnswerModalOpen: Dispatch<SetStateAction<boolean>>;
};

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;
const imageStyle = css`
  object-fit: contain;
  width: 100%;
`;
const innerStyle = css`
  display: flex;
`;
const inputFieldStyle = css`
  background: #fff;
`;

const storage = window.localStorage;

export default function AnswerCheckModal(props: Props) {
  const { image, floorLabel, answer, answersList, setIsAnswerModalOpen } =
    props;
  const { isCleared, setIsCleared } = useContext(IsClearedContext);
  const { answers, setAnswers } = useContext(AnswersContext);

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numberOfClearedFloors = useMemo(
    () => Object.values(isCleared).filter(Boolean).length,
    [isCleared]
  );

  const handleClick = useCallback(() => {
    if (answersList.indexOf(answer.toLowerCase()) === -1) {
      if (Boolean(storage.getItem(`b${floorLabel}fAnswer`))) {
        return;
      }
      //間違えたときの処理を記述
      setIsCorrectAnswer(false);
      setIsModalOpen(true);
      return;
    }

    //正解したときの処理を記述
    if (numberOfClearedFloors >= floorLabel) return;
    switch (floorLabel) {
      case 1:
        setIsCleared({ ...isCleared, b1fIsCleared: true });
        break;
      case 2:
        setIsCleared({ ...isCleared, b2fIsCleared: true });
        break;
      case 3:
        setIsCleared({ ...isCleared, b3fIsCleared: true });
        break;
      case 4:
        setIsCleared({ ...isCleared, b4fIsCleared: true });
        break;
      case 5:
        setIsCleared({ ...isCleared, b5fIsCleared: true });
        break;
      case 6:
        setIsCleared({ ...isCleared, b6fIsCleared: true });
        break;
      case 7:
        setIsCleared({ ...isCleared, b7fIsCleared: true });
        break;
      case 8:
        setIsCleared({ ...isCleared, b8fIsCleared: true });
        break;
      case 9:
        setIsCleared({ ...isCleared, b9fIsCleared: true });
        break;
      case 10:
        setIsCleared({ ...isCleared, b10fIsCleared: true });
    }
    storage.setItem(`b${floorLabel}fAnswer`, `${answer}`);
    setIsCorrectAnswer(true);
    setIsModalOpen(true);
  }, [
    answer,
    answersList,
    floorLabel,
    isCleared,
    numberOfClearedFloors,
    setIsCleared,
  ]);

  const inputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      switch (floorLabel) {
        case 1:
          setAnswers({ ...answers, b1fAnswer: event.currentTarget.value });
          break;
        case 2:
          setAnswers({ ...answers, b2fAnswer: event.currentTarget.value });
          break;
        case 3:
          setAnswers({ ...answers, b3fAnswer: event.currentTarget.value });
          break;
        case 4:
          setAnswers({ ...answers, b4fAnswer: event.currentTarget.value });
          break;
        case 5:
          setAnswers({ ...answers, b5fAnswer: event.currentTarget.value });
          break;
        case 6:
          setAnswers({ ...answers, b6fAnswer: event.currentTarget.value });
          break;
        case 7:
          setAnswers({ ...answers, b7fAnswer: event.currentTarget.value });
          break;
        case 8:
          setAnswers({ ...answers, b8fAnswer: event.currentTarget.value });
          break;
        case 9:
          setAnswers({ ...answers, b9fAnswer: event.currentTarget.value });
          break;
        case 10:
          setAnswers({ ...answers, b10fAnswer: event.currentTarget.value });
      }
    },
    [answers, floorLabel, setAnswers]
  );

  return (
    <div css={wrapperStyle}>
      <div>
        <img src={image} alt={`b${floorLabel}fQuestion`} css={imageStyle} />
      </div>
      <div css={innerStyle}>
        <TextField
          variant="outlined"
          type="text"
          label="解答を入力してください"
          name={`b${floorLabel}f`}
          value={answer}
          onChange={inputChange}
          css={inputFieldStyle}
          size="small"
        />
        <Button onClick={handleClick} variant="outlined">
          確認
        </Button>
      </div>
      <CloseIcon setIsModalOpen={setIsAnswerModalOpen} />
      <ModalWindow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isCorrectAnswer ? (
          <CorrectAnswerModalContent setIsModalOpen={setIsModalOpen} />
        ) : (
          <IncorrectAnswerModalContent setIsModalOpen={setIsModalOpen} />
        )}
      </ModalWindow>
    </div>
  );
}
