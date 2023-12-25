import React from "react";

import NavProjects from "../molecules/projectsSection/NavProjects";

import '../../styles/layout/_projectsSection.scss'

export default function ProjectsSection() {


    return (
        <div className="projects">
            <div id="correct-position-behavior"></div>
            <NavProjects />
        </div>
    )
}