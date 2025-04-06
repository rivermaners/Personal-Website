import './App.css';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} /> {/* Use element prop to pass components */}
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;