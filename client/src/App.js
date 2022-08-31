import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Spot from "./pages/Spot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spot" element={<Spot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
