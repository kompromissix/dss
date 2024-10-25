import Header from './header/Header.jsx'
import Footer from './Footer/Footer.jsx'  
import AboutTheCompany from './AboutTheCompany/AboutTheCompany.jsx'
import Personal from './Personal/Personal.jsx'
import { Router, Route, Routes } from 'react-router-dom'
import Activity from './Activity/Activity.jsx'
import Marketplace from './Marketplace/Marketplace.jsx'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<AboutTheCompany/>}/>
        <Route path='/AboutTheCompany' element={<AboutTheCompany/>}/>
        <Route path='/Personal' element={<Personal/>}/>
        <Route path='/Activity' element={<Activity/>}/>
        <Route path='/Marketplace' element={<Marketplace/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
