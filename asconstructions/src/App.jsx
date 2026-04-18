
import './App.css'
import Navbar from './components/Navbar'
import About from './sections/About'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Stats from './sections/Stats'
import Work from './sections/Work'

function App() {


  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Stats/>
     <Projects/>
     <Work/>
     <Clients/>
     <Contact/>
     
    </>
  )
}

export default App
