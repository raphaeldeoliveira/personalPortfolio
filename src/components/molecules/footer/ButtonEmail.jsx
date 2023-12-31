import React from "react";

import { MdMailOutline } from "react-icons/md";

export default function ButtonEmail(props) {

    const [showDialogMsg, setShowDialogMsg] = React.useState(false)

    function showDialogMessage() {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = "rafaolive3003@gmail.com";
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        
        setTimeout(() => {
            setShowDialogMsg((prevShow) => !prevShow)
        }, 1000);
        setShowDialogMsg((prevShow) => !prevShow)
    }

    return <button 
            className="socialMedias__button--email"
            onClick={showDialogMessage}
        >
        <span 
            className={props.english ? "email__label" : "email__label--brLang"}
            style={{ display: showDialogMsg ? "inline" : "none" }}
            >{props.english ? "Copied!" : "Copiado!"}
        </span>
        <MdMailOutline 
            className="email__icon" 
            size={50} 
            color={props.lightTheme ? "black" : "white"}
            style={{ display: showDialogMsg ? "none" : "inline" }}
        />
    </button>
}