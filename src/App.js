
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
   <div>
      <Navbar /> 
      <Hero /> 
      <About /> 
      <Projects /> 
      <Contact /> 
      <Footer /> 
   </div>
  );
}

export default App;
