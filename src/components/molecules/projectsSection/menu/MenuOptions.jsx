import React from "react";

export default function MenuOptions(props) {

    return (
        <div style={{
            display: (props.showOptions ? "block" : "none")
        }} className={`menu__options ${props.mobile ? "menu__options--mobile" : ""}`}>
            {props.optionsMenu.map((option, index) => (
                <div
                    key={option}
                    onClick={() => {
                        props.setActiveOption(option);
                        props.setActiveTextMenu(props.optionsMenutext[index])
                        props.toggleMenu();
                    }}
                    className="menu__options__section"
                >
                    {option}
                </div>
            ))}
        </div>
    )
}