import { BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Forms from "./pages/Forms"

const App = () => {
  return (
   <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <Login />
        </div>
        <About />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Routes>
        <Route path='/profile' />
        <Route path='/form' element={<Forms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App