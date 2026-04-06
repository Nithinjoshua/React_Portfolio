import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Animated background blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <CodingProfiles />
      </main>

      <Footer />
    </>
  );
}
