import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.js"
import SelfCare from "./pages/SelfCare.js"
import JournalViews from "./pages/JournalViews.js"
import NavBar from "./components/NavBar.jsx"
import JournalPost from "./pages/JournalPost.js"
import UpdatePost from "./components/UpdatePost.jsx"
import Register from "./pages/Register.js"
import Login from "./pages/Login.js"

const App = () => {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journals" element={<JournalViews />} />
      <Route path="/selfcare" element={<SelfCare />} /> 
      <Route path="/newpost" element={<JournalPost />} />
      <Route path='/updatepost/:id' element={<UpdatePost />} />
      {/* <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} /> */}
    </Routes>
    </>
  );
}

export default App;
