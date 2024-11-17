import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/About-us" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
