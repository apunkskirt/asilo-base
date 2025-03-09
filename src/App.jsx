import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/FloatingButtons';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Residents from './pages/Residents';
import Donations from './pages/Donations';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/residentes" element={<Residents />} />
        <Route path="/donaciones" element={<Donations />} />
        <Route path="/voluntariado" element={<Volunteer />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}

export default App;
