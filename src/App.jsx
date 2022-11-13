import './assets/styles/style.css';
import About from './components/About';
import { Contact } from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Qualifications from './components/Parcour';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Footer from './components/Footer';

import  ThemeContextProvider  from './context/ThemeContext';


function App() {
  return (
    <>
    <ThemeContextProvider>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Portfolio />
      <Contact />
      <Footer />
    </ThemeContextProvider>
      
      
    </>
  );
}

export default App;
