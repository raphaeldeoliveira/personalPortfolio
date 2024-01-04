import React, { useState, useEffect } from "react";

import MenuHeader from "./MenuHeader";
import MenuOptions from "./MenuOptions";

export default function MenuPanel(props) {

    const [showOptions, setShowOptions] = useState(false)
    const [activeOption, setActiveOption] = useState(props.optionsMenu[0])
    const [activeTextMenu, setActiveTextMenu] = useState(props.optionsMenutext[0])

    const [bgSoftColor, setBgSoftColor] = useState()
    const [bgStrongColor, setBgStrongColor] = useState()

    function toggleMenu() {
        setShowOptions((prevState) => !prevState)
    }

    useEffect(() => {
        let letters = 'ABCDEF';
        let color = '#';
        
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 6)];
        }
        
        setBgSoftColor(color)
    
        letters = '123456789ABCDEF';
        color = '#';
    
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 15)];
        }
    
        setBgStrongColor(color)
    }, [])

    return (
        <div className="menu__card">
            <div 
                className="menu__layout"
                style={{ 
                    display: (showOptions ? "none" : "block"),
                    backgroundImage: `linear-gradient(45deg, ${bgSoftColor}, ${bgStrongColor})`
                }}
            >
                <MenuHeader 
                    toggleMenu={toggleMenu}
                    activeOption={activeOption}
                />
                <p className="menu__paragraph">{activeTextMenu}</p>
            </div>
            <MenuOptions 
                mobile={props.mobile}
                showOptions={showOptions}
                optionsMenu={props.optionsMenu}
                optionsMenutext={props.optionsMenutext}
                setActiveTextMenu={setActiveTextMenu}
                setActiveOption={setActiveOption}
                toggleMenu={toggleMenu}
            />
        </div>
    )
}