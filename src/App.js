import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.js"
import SelfCare from "./pages/SelfCare.js"
import JournalPost from "./components/JournalPost"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newPost" element={<JournalPost />} />
      <Route path="/selfcare" element={<SelfCare />} /> 
    </Routes>
  );
}

export default App;
