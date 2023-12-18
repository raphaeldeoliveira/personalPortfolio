import React from "react";
import '../../styles/modules/_button.scss'

export default function Button(props) {


    return (
        <button 
            className="button"
            onClick={() => props.scrollTo(props.buttonTitle)}
            >{props.buttonTitle}
        </button>
    )
}