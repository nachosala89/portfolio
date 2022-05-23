import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className='px-20 white-bcg'>
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
