import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Main from "./pages/Main/Main"
import Profile from "./pages/Profile/Profile"
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit"
import Bookings from "./pages/Bookings/Bookings"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/:id/profile" element={<Profile />} />
        <Route path="/:id/profileEdit" element={<ProfileEdit />} />
        <Route path="/:id/bookings" element={<Bookings />} />
      </Routes>
    </div>
  )
}

export default App
