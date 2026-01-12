import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 bg-[url('https://transparenttextures.com/patterns/asfalt-light.png')] opacity-[0.02] pointer-events-none z-0"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Gallery />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;