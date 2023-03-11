import { Routes, Route } from "react-router-dom";
import Cocktails from "./pages/cocktails";
import FourOhFour from "./pages/fourOhfour";
import Home from "./pages/home";
import Parks from "./pages/parks";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parks" element={<Parks />} />
      <Route path="/cocktails" element={<Cocktails />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}

export default Router;
