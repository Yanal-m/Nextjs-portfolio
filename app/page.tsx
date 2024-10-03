import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Bento from './components/Bento';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Bento />
      </main>
      <Footer />
    </>
  );
}
