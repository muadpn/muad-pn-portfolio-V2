import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Passion from "./components/Passion";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-black min-w-[100%] font-poppins px-2 sm:px-6 md:px-8 xl:px-20 2xl:px-60 text-gray scroll-smooth">
      <Navbar/>
      <main>
      <Hero/>
      <Passion/>
      <Skills/>
      <Work/>
      <Projects/>
      <Connect/>
      </main>
    </div>
  );
}

export default App;
