import React, { useState } from "react";

import NavButtons from "./NavButtons";

export default function NavProjects() {

    const [currentProject, setCurrentProject] = useState(0)

    function moveUp() {
        setCurrentProject((prevState) => {
            return prevState === 0 ? 2 : prevState === 1 ? 0 : 1
        })
    }

    function moveBottom() {
        setCurrentProject((prevState) => {
            return prevState === 0 ? 1 : prevState === 1 ? 2 : 0
        })
    }

    return (
        <div className="projects__header">
            <NavButtons 
                moveUp={moveUp}
                moveBottom={moveBottom}
            />
        </div>
    )
}