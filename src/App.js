import './App.css';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className='container mx-auto px-20'>
      <Header />
      <Projects />
      <About />
    </div>
  );
}

export default App;
