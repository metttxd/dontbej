import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import WhoAreWe from './pages/WhoAreWe'
import Navbar from './components/Navbar'
import Footer from './components/sections/footer/default'

function App() {
  return (
    <>
 <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/who-are-we' element={<WhoAreWe />} />
      </Routes>   
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
