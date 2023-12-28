import React, { useState } from "react";

import NavProjects from "../molecules/projectsSection/NavProjects";
import CarrouselPanelsLayout from "../molecules/projectsSection/CarrouselPanelsLayout";

import '../../styles/layout/_projectsSection.scss';

export default function ProjectsSection(props) {

    const [currentProject, setCurrentProject] = useState(0)
    const [titleTransition, setTitleTransition] = useState(false)

    function moveUp() {
        if (!titleTransition) {
            setTitleTransition(true)
            setTimeout(() => {
                setCurrentProject((prevState) => {
                    return prevState === 0 ? 2 : prevState === 1 ? 0 : 1
                })
            }, 400)
            setTimeout(() => {
                setTitleTransition(false)
            }, 1000)
        }
    }

    function moveBottom() {
        if (!titleTransition) {
            setTitleTransition(true)
            setTimeout(() => {
                setCurrentProject((prevState) => {
                    return prevState === 0 ? 1 : prevState === 1 ? 2 : 0
                })
            }, 400)
            setTimeout(() => {
                setTitleTransition(false)
            }, 1000)
        }
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
            />
        </div>
    )
}