import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Spot from "./pages/Spot";
import About from "./pages/About";
import Review from "./pages/Review";
import { Loading } from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spot" element={<Spot />} />
        <Route path="/about" element={<About />} />
        <Route path="/review/*" element={<Review />} />
        {/* <Route path="/loading" element={<Loading />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
