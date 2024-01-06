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
  const [currentProject, setCurrentProject] = useState(0)
  const [titleTransition, setTitleTransition] = useState(false)

  useEffect(() => {
    const updateMobileStatus = () => {
      setMobile(window.innerWidth <= 780);
    }
    window.addEventListener("resize", updateMobileStatus);
    return () => {
      window.removeEventListener("resize", updateMobileStatus);
    }
  }, [])

  useEffect(() => {
    setMobile(window.innerWidth <= 780);
  }, [])

  function toggleLanguage() {
    setEnglish((prevState) => !prevState)
  }

  function changeTitleCard(position) {
    if (currentProject !== position) {
      setTitleTransition(true)
      setTimeout(() => {
        setCurrentProject(position)
      }, 400)
      setTimeout(() => {
        setTitleTransition(false)
      }, 1000)
    }
  }

  function changeTitle(type) {
    if (!titleTransition) {
        setTitleTransition(true)
        setTimeout(() => {
            setCurrentProject((prevState) => {
                return (type === "up" 
                    ? (prevState === 0 ? 2 : prevState === 1 ? 0 : 1) 
                    : (prevState === 0 ? 1 : prevState === 1 ? 2 : 0)
                )
            })
        }, 400)
        setTimeout(() => {
            setTitleTransition(false)
        }, 1000)
    }
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
        changeTitle={changeTitleCard}
      />
      <ProjectsSection 
        english={english}
        mobile={mobile}
        scrollY={scrollY}
        setScrollY={setScrollY}
        changeTitle={changeTitle}
        currentProject={currentProject}
        titleTransition={titleTransition}
      />
      <Footer 
        english={english}
        lightTheme={lightTheme}
      />
    </div>
  );
}

export default App;
