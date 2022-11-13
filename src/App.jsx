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
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'



function App() {
  return (
    <>
    <ThemeContextProvider>
    <ReactNotifications />
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
