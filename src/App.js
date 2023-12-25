import React, { useState, useEffect } from "react";
import Button from "./components/atoms/Button";

import Header from "./components/organisms/Header";
import IntroductionSection from "./components/organisms/IntroductionSection";
import CardSection from "./components/organisms/CardSection";
import ProjectsSection from "./components/organisms/ProjectsSection";
import Footer from "./components/organisms/Footer";

import './styles/main.scss'

function App() {

  const [mobile, setMobile] = useState(false)
  const [english, setEnglish] = useState(false)

  useEffect(() => {
    setMobile(window.innerWidth <= 780 ? true : false)
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
      />
      <IntroductionSection 
        english={english}
      />
      <CardSection 
        mobile={mobile}
        english={english}
      />
      <ProjectsSection 
      
      />
      <Footer 
        english={english}
      />
    </div>
  );
}

export default App;
