
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Favorites from './Pages/Favorites'
import Nav from './Components/Nav'
import './App.css'

function App() {


  return (
    <div>
     <Nav/>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/favorites" element={<Favorites />} />
     </Routes>
    </div>

  )}
export default App
