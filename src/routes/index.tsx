import { useContext } from "react";
import {
  Routes as Router,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Clear } from "../components/Clear";
import { Introduction } from "../components/Introduction";
import { Questions } from "../components/Questions";
import { IsClearedContext } from "../contexts/isClearedContext";

export function Routes() {
  const { isCleared } = useContext(IsClearedContext);

  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Introduction />} />
        <Route path="/elevator" element={<Questions />} />
        <Route
          path="/escaped"
          element={
            isCleared.b10fIsCleared ? <Clear /> : <Navigate replace to="/" />
          }
        />
      </Router>
    </BrowserRouter>
  );
}
