import React from "react";

import '../../styles/modules/_button--resume.scss'

export default function ButtonResume(props) {


    return (
        <button className="button--resume"
            >{props.buttonTitle}
        </button>
    )
}