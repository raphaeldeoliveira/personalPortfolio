import React from "react";

import Resume from "./Resume";
import Curriculum from "./Curriculum"
import ButtonResume from "../../atoms/ButtonResume"

import "../../../styles/modules/introductionSection/_text-section.scss"

export default function TextSection(props) {

    return (
        <div className="text-section">
            <Resume 
                resumeActive={props.resumeActive}
                english={props.english}
            />
            <Curriculum 
                resumeActive={props.resumeActive}
                english={props.english}
            />
            <ButtonResume 
                resumeActive={props.resumeActive}
                toggleResume={props.toggleResume}
                english={props.english}
            />
        </div>
    )
}