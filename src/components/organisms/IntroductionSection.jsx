import React from "react";

import '../../styles/layout/_introductionSection.scss'

import PhotoSection from "../molecules/introductionSection/PhotoSection";

export default function IntroductionSection(props) {

    return (
        <div className="introductionSection">
            <PhotoSection 
                english={props.english}
            />

        </div>
    )
}