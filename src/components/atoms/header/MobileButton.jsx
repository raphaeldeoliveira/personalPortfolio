import React, { useState } from "react";

import { IoLanguage } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { MdBrightnessMedium } from "react-icons/md";

export default function MobileButton(props) {

    const [activeButton, setActiveButton] = useState()

    function toggleActiveButton() {
        setActiveButton((prevState) => !prevState)
    }

    function renderIcons() {
        switch (props.title) {
            case "Light mode":
            case "Dark mode":
                return <MdBrightnessMedium />;
            case "Projects":
            case "Projetos":
                return <FaFolder />;
            case "Contact":
            case "Contato":
                return <BsEnvelope />;
            case "English":
            case "Portugues":
                return <IoLanguage />;
            default:
                return null;
        }
    }

    return (
        <button
            onClick={() => {
                props.toggleShowMobileMenu();
                if (props.scrollTo) {
                    setTimeout(() => {
                        props.scrollTo(
                            props.title === "Projetos"
                            ? "Projects"
                            : props.title === "Contato"
                            ? "Contact"
                            : props.title
                        );
                    }, 300)
                } else {
                    if (props.setLightTheme) {
                        toggleActiveButton();
                        props.setLightTheme((prevState) => !prevState)
                        document.body.classList.toggle("lightmode");
                    } else {
                        toggleActiveButton();
                        props.toggleLanguage()
                    }
                }
            }}
            className={activeButton ? "mobile__button--active" : ""}>
                {renderIcons()} <span>{props.title}</span>
        </button>
    );
}