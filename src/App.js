import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.js"
import SelfCare from "./pages/SelfCare.js"
import JournalViews from "./pages/JournalViews.js"
import NavBar from "./components/NavBar.jsx"
import JournalPost from "./components/JournalPost.jsx"

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journals" element={<JournalViews />} />
      <Route path="/selfcare" element={<SelfCare />} /> 
      <Route path="/newpost" element={<JournalPost />} />
    </Routes>
    </>
  );
}

export default App;
