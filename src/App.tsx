import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { Navbar } from "./components/Navbar"
import './App.css'
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
