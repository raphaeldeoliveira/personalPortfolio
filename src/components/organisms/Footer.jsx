import React from "react";

import Branding from "../molecules/footer/Branding";
import SocialMedias from "../molecules/footer/SocialMedias";

import '../../styles/layout/_footer.scss'

export default function Footer(props) {


    return (
        <footer className="footer">
            <Branding />
            <SocialMedias 
                english={props.english}
            />
        </footer>
    )
}