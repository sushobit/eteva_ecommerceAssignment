import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import AboutUsPage from './components/AboutUs';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cart" element={<LoginPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/aboutus" element={<AboutUsPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
