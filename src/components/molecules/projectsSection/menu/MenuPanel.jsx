import React, { useState } from "react";

import MenuHeader from "./MenuHeader";
import MenuOptions from "./MenuOptions";

export default function MenuPanel() {

    const [showOptions, setShowOptions] = useState(false)

    function toggleMenu() {
        setShowOptions((prevState) => !prevState)
    }

    return (
        <div className="menu__card">
            <div 
                className="menu__layout"
                style={{ display: (!showOptions ? "none" : "block") }}
            >
                <MenuHeader 
                    toggleMenu={toggleMenu}
                />
                <p></p>
            </div>
            <MenuOptions 
                showOptions={showOptions}
            />
        </div>
    )
}