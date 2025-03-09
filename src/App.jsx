import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Residents from './pages/Residents'
import Donations from './pages/Donations'
import AboutUs from './pages/AboutUs'
import Volunteer from './pages/Volunteer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residentes" element={<Residents />} />
            <Route path="/donaciones" element={<Donations />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/voluntariado" element={<Volunteer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
