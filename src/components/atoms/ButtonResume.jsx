import React from "react";

import '../../styles/modules/_button--resume.scss'

export default function ButtonResume(props) {

    return (
        <button 
            className="button--resume"
            onClick={props.toggleResume}
            >{props.resumeActive ? 
                props.english ? "View Resume" : "Ver Resumo" : 
                props.english ? "View Full CV" : "Ver Currículo"
            }
        </button>
    )
}