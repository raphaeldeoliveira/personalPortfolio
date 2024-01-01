import React from "react";

import Button from "../../atoms/projectsSection/Button";

export default function NavButtons(props) {

    return (
        <div className="header__nav-buttons">
            <Button 
                type="top"
                moveFunction={props.moveUp}
            />
            <Button 
                type="bottom"
                moveFunction={props.moveBottom}
            />
        </div>
    )
}