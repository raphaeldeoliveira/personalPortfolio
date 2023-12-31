import React, {useState} from "react";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import '../../../styles/modules/_button.scss'

export default function ButtonTheme(props) {

    function toggleTheme() {
        props.setLightTheme((prevState) => !prevState)
        document.body.classList.toggle("lightmode");
    }

    return <button 
        className="button" 
        onClick={toggleTheme}
            >{props.lightTheme ? <MdLightMode /> : <MdDarkMode />}
        </button>
}