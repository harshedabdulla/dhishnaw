import { BrowserRouter } from "react-router-dom"
import Workshop from "./pages/Workshop"
import Forms from "./pages/Forms"

const App = () => {
  return (
   <BrowserRouter>
   <Workshop />
   <Forms />
  
    </BrowserRouter>
  )
}

export default App