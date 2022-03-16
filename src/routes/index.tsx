import { Routes as Router, Route } from "react-router-dom";
import { Clear } from "../components/Clear";
import { Introduction } from "../components/Introduction";
import { Questions } from "../components/Questions";

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Introduction />} />
      <Route path="/elevator" element={<Questions />} />
      <Route path="/escaped" element={<Clear />} />
    </Router>
  );
}
