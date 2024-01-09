import React from "react";

import NavProjects from "../molecules/projectsSection/NavProjects";
import CarrouselPanelsLayout from "../molecules/projectsSection/CarrouselPanelsLayout";

import '../../styles/layout/_projectsSection.scss';

export default function ProjectsSection(props) {

    function scrollPanels(type) {
        props.setScrollY((prevState) => {
            return (type === "up" 
                ? (prevState === 0 ? (props.mobile ? -377 : -76.54) : (prevState === -188.5 || prevState === -38.27) ? 0 : (props.mobile ? -188.5 : -38.27)) 
                : (prevState === 0 ? (props.mobile ? -188.5 : -38.27) : (prevState === -188.5 || prevState === -38.27) ? (props.mobile ? -377 : -76.54) : 0)
            )
        })
    }

    function moveUp() {
        props.changeTitle("up")
        scrollPanels("up")
        setTimeout(() => { }, 1000)
    }

    function moveBottom() {
        props.changeTitle("bottom")
        scrollPanels("bottom")
        setTimeout(() => { }, 1000)
    }

    return (
        <div className="projects">
            <div id="correct-position-behavior"></div>
            <NavProjects 
                english={props.english}
                currentProject={props.currentProject}
                moveUp={moveUp}
                moveBottom={moveBottom}
                titleTransition={props.titleTransition}
            />
            <CarrouselPanelsLayout
                english={props.english}
                mobile={props.mobile}
                scrollY={props.scrollY}
            />
        </div>
    )
}