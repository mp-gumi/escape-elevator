/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "@emotion/react";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function StartButton() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/elevator");
  }, [navigate]);

  return (
    <Button onClick={handleClick} variant="contained">
      謎解きを始める
    </Button>
  );
}
