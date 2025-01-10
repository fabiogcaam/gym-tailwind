import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Main from "./pages/Main/Main"
import Bookings from "./pages/Bookings/Bookings"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import CreateActivity from "./pages/CreateActivity/CreateActivity"
import CreateClass from "./pages/CreateClass/CreateClass"
import CreateTrainer from "./pages/CreateTrainer/CreateTrainer"
import NotFound from "./pages/NotFound/NotFound"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
          <Route path="/main" element={<Main />} />
          <Route path="/:id/bookings" element={<Bookings />} />
          <Route path="/createActivity" element={<CreateActivity />} />
          <Route path='/:id/createClass' element={<CreateClass />} />
          <Route path='/createTrainer' element={<CreateTrainer />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
