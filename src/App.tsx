import Hero from './components/Hero';
import About from './components/About';
import Packages from './components/Packages';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Events />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
