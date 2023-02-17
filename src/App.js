import Navbar from "./components/Navbar";
import Skills from "./components/Skills"
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" mx-auto">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>

  );
}
export default App;