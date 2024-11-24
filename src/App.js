import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';
import Contactus from './Pages/Contactus/Contactus';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
