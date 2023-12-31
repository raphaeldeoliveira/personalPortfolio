import React from "react";

import ButtonEmail from "./ButtonEmail";
import Button from "./Button";

import '../../../styles/modules/footer/_socialMedias.scss'

import { FaLinkedinIn , FaWhatsapp , FaGithub } from "react-icons/fa";

export default function SocialMedias(props) {

    return (
        <div className="socialMedias">
            <ButtonEmail 
                english={props.english}
                lightTheme={props.lightTheme}
            />
            <Button 
                href="https://www.linkedin.com/in/raphael-de-oliveira-carvalho-a6b133253/"
                mediaIcon={<FaLinkedinIn size={50} color={props.lightTheme ? "black" : "white"}/>}
            />
            <Button 
                href="https://wa.me/5547984470822"
                mediaIcon={<FaWhatsapp size={50} color={props.lightTheme ? "black" : "white"} />}
            />
            <Button 
                href="https://github.com/raphaeldeoliveira"
                mediaIcon={<FaGithub size={50} color={props.lightTheme ? "black" : "white"} />}
            />
        </div>
    )
}