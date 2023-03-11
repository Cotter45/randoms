import { Routes, Route } from "react-router-dom";
import Cocktails from "./pages/cocktails";
import FourOhFour from "./pages/fourOhfour";
import Home from "./pages/home";
import Parks from "./pages/parks";

function Router() {
  return (
    <Routes>
      <Route path="/randoms" element={<Home />} />
      <Route path="/randoms/parks" element={<Parks />} />
      <Route path="/randoms/cocktails" element={<Cocktails />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}

export default Router;
