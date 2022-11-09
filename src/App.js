import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Result from "./pages/result/Result";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="result/:number/:name/:gender" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
