import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AllMeetUps from "./pages/AllMeetUps";
import Favourites from "./pages/Favourites";
import NewMeetUps from "./pages/NewMeetUps";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllMeetUps />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/newmeetups" element={<NewMeetUps />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
