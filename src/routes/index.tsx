import { Routes as Router, Route, BrowserRouter } from "react-router-dom";
import { Clear } from "../components/Clear";
import { Introduction } from "../components/Introduction";
import { Questions } from "../components/Questions";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Introduction />} />
        <Route path="/elevator" element={<Questions />} />
        <Route path="/escaped" element={<Clear />} />
      </Router>
    </BrowserRouter>
  );
}
