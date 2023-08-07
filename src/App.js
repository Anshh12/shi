
import { BrowserRouter as Router , Route, Routes, } from 'react-router-dom'
import Header from './components/Header'
import React from 'react'
import Home from './components/Home'
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import "./styles/mediaqerry.scss"


const App = () => {
  return (
   
<div>
  <Router>
  <Header />
    <Routes>
      <Route path='' element={<Home />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Services' element={<Services />}/>
    </Routes>
    <Footer/>
  </Router>


</div>
  )
}

export default App
