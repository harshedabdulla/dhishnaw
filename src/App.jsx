import { BrowserRouter } from "react-router-dom"
import Workshop from "./pages/Workshop"
import Forms from "./pages/Forms"
import Login from "./pages/Login"

const App = () => {
  return (
   <BrowserRouter>
   <Workshop />
   <Forms />
  
    </BrowserRouter>
  )
}

export default App