import React, { useState, useEffect } from "react";

import Header from "./components/organisms/Header";
import IntroductionSection from "./components/organisms/IntroductionSection";
import CardSection from "./components/organisms/CardSection";
import ProjectsSection from "./components/organisms/ProjectsSection";
import Footer from "./components/organisms/Footer";

import './styles/main.scss'

function App() {

  const [mobile, setMobile] = useState(false)
  const [english, setEnglish] = useState(false)
  const [lightTheme, setLightTheme] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {

    const updateMobileStatus = () => {
      setMobile(window.innerWidth <= 780);
    }

    window.addEventListener("resize", updateMobileStatus);

    return () => {
      window.removeEventListener("resize", updateMobileStatus);
    }

  }, [])

  function toggleLanguage() {
    setEnglish((prevState) => !prevState)
  }

  return (
    <div className="App">
      <Header 
        mobile={mobile}
        english={english}
        toggleLanguage={toggleLanguage}
        lightTheme={lightTheme}
        setLightTheme={setLightTheme}
      />
      <IntroductionSection 
        english={english}
      />
      <CardSection 
        mobile={mobile}
        english={english}
        setScrollY={setScrollY}
      />
      <ProjectsSection 
        english={english}
        mobile={mobile}
        scrollY={scrollY}
        setScrollY={setScrollY}
      />
      <Footer 
        english={english}
        lightTheme={lightTheme}
      />
    </div>
  );
}

export default App;
