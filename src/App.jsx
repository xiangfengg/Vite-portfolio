import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import MyTools from './components/MyTools';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';



const App = () => {
  return (
    <>
      <div className="absolute top-0 z-[-1] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        {/* <div className="relative z-10"> */}
        <Navbar />
        <HeroSection />
        <MyTools />
        <Projects />
        <Testimonial />
        <Contact />


      </div>
      {/* </div> */}
    </>
  );
};

export default App;
