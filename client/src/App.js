import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Spot from "./pages/Spot";
import About from "./pages/About";
import Review from "./pages/Review";
import Admin from "./pages/Admin";
import {ScrollPrac} from "./pages/Scroll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spot" element={<Spot />} />
        <Route path="/about" element={<About />} />
        <Route path="/review/*" element={<Review />} />
        <Route path="/scroll" element={<ScrollPrac />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
