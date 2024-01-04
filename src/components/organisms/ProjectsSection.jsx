import React, { useState } from "react";

import NavProjects from "../molecules/projectsSection/NavProjects";
import CarrouselPanelsLayout from "../molecules/projectsSection/CarrouselPanelsLayout";

import '../../styles/layout/_projectsSection.scss';

export default function ProjectsSection(props) {

    const [currentProject, setCurrentProject] = useState(0)
    const [titleTransition, setTitleTransition] = useState(false)

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
        props.setScrollY((prevState) => {
            return (type === "up" 
                ? (prevState === 0 ? (props.mobile ? -377 : -76.54) : (prevState === -188.5 || prevState === -38.27) ? 0 : (props.mobile ? -188.5 : -38.27)) 
                : (prevState === 0 ? (props.mobile ? -188.5 : -38.27) : (prevState === -188.5 || prevState === -38.27) ? (props.mobile ? -377 : -76.54) : 0)
            )
        })
    }

    function moveUp() {
        changeTitle("up")
        scrollPanels("up")
        setTimeout(() => { }, 1000)
    }

    function moveBottom() {
        changeTitle("bottom")
        scrollPanels("bottom")
        setTimeout(() => { }, 1000)
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
                scrollY={props.scrollY}
            />
        </div>
    )
}