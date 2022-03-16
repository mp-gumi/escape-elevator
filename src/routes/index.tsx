import { Routes as Router, Route } from "react-router-dom";
import { Introduction } from "../components/Introduction";

export function Routes() {
  return (
    <Router>
      <Route path="/introduction" element={<Introduction />} />
    </Router>
  );
}
