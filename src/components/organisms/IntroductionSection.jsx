import React, { useState } from "react";

import '../../styles/layout/_introductionSection.scss'

import PhotoSection from "../molecules/introductionSection/PhotoSection";
import TextSection from "../molecules/introductionSection/TextSection";

export default function IntroductionSection(props) {

    const [resumeActive, setResumeActive] = useState(false)

    function toggleResume() {
        setResumeActive((prevState) => !prevState)
    }

    return (
        <div className="introductionSection">
            <PhotoSection 
                english={props.english}
                resumeActive={resumeActive}
            />
            <TextSection 
                resumeActive={resumeActive}
                toggleResume={toggleResume}
                english={props.english}
            />
        </div>
    )
}