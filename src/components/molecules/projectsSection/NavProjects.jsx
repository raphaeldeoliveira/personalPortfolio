import React, { useState } from "react";

import NavButtons from "./NavButtons";
import Title from "../../atoms/projectsSection/Title";

export default function NavProjects(props) {

    return (
        <div className="projects__header">
            <NavButtons 
                moveUp={props.moveUp}
                moveBottom={props.moveBottom}
            />
            <Title 
                currentProject={props.currentProject}
                titleTransition={props.titleTransition}
                links={["", "https://github.com/raphaeldeoliveira/PlataformaEnsino", "https://github.com/raphaeldeoliveira/LojaRoupaApp"]}
                titles={props.english ? 
                    ["FIFA BOT Project", "Teaching Platform", "Angel Modas"]
                     : ["Projeto do FIFA BOT", "Plataforma de ensino", "Angel Modas"]
                }
            />
        </div>
    )
}