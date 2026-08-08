import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import HowItWorks from './pages/HowItWorks';
import Services from './pages/Services';
import About from './pages/About';
import Quality from './pages/Quality';
import FAQ from './pages/FAQ';
import Quote from './pages/Quote';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
