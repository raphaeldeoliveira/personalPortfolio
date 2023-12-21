import React from "react";

import '../../../styles/modules/footer/_branding.scss'

import BrandingTitle from "../../atoms/footer/BrandingTitle";
import BrandingHr from "../../atoms/footer/BrandingHr"

export default function Branding(props) {

    return (
        <div className="branding">
            <div>
                <BrandingTitle 
                    title="RAPHAEL"
                />
                <BrandingTitle 
                    title="CARVALHO"
                    lastName={true}
                />
            </div>
            <BrandingHr />
        </div>
    )
}