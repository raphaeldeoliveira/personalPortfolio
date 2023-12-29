import React, { useState } from "react";

import NavProjects from "../molecules/projectsSection/NavProjects";
import CarrouselPanelsLayout from "../molecules/projectsSection/CarrouselPanelsLayout";

import '../../styles/layout/_projectsSection.scss';

export default function ProjectsSection(props) {

    const [currentProject, setCurrentProject] = useState(0)
    const [titleTransition, setTitleTransition] = useState(false)
    const [scrollY, setScrollY] = useState(0)

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

    function scrollPanels(type) {
        setScrollY((prevState) => {
            return (type === "up" 
                ? (prevState === 0 ? (props.mobile ? -387 : -76.54) : (prevState === -193.5 || prevState === -38.27) ? 0 : (props.mobile ? -193.5 : -38.27)) 
                : (prevState === 0 ? (props.mobile ? -193.5 : -38.27) : (prevState === -193.5 || prevState === -38.27) ? (props.mobile ? -387 : -76.54) : 0)
            )
        })
    }

    function moveUp() {
        changeTitle("up")
        scrollPanels("up")
    }

    function moveBottom() {
        changeTitle("bottom")
        scrollPanels("bottom")
    }

    return (
        <div className="projects">
            <div id="correct-position-behavior"></div>
            <NavProjects 
                english={props.english}
                currentProject={currentProject}
                moveUp={moveUp}
                moveBottom={moveBottom}
                titleTransition={titleTransition}
            />
            <CarrouselPanelsLayout
                english={props.english}
                mobile={props.mobile}
                scrollY={scrollY}
            />
        </div>
    )
}