import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import JournalPost from "./components/JournalPost"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newPost" element={<JournalPost />} />
    </Routes>
  );
}

export default App;
