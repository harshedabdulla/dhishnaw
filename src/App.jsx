import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Forms from "./pages/Forms"
import Home from "./pages/Home"

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' />
        <Route path='/form' element={<Forms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App