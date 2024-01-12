import React from "react";

import CarrouselImages from "./CarrouselImages";

export default function Card(props) {

    function scrollToProject() {
        document.getElementById("correct-position-behavior").scrollIntoView({ behavior: 'smooth' })

        setTimeout(() => {
            switch (props.title) {
                case "FIFA Bot Project":
                case "Projeto do FIFA BOT":
                    props.setScrollY(0);
                    props.changeTitle(0);
                    break;
                case "Teaching platform":
                case "Plataforma de ensino":
                    props.setScrollY(props.mobile ? -193.5 : -38.27);
                    props.changeTitle(1);
                    break;
                case "Angel Modas":
                    props.setScrollY(props.mobile ? -387 : -76.54);
                    props.changeTitle(2);
                    break;
                default:
                    props.setScrollY(0);
            }
        }, 400)
    }

    return (
        <>
        {!props.mobile ? (
            <button 
                className={props.lightMode ? "card-section__card--2" : "card-section__card--1"}
            >
                <div onClick={() => props.lightMode ? window.open("https://leetcode.com/raphaeloc/", '_blank') : scrollToProject(props.currentId)} className="card__text-section">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <CarrouselImages
                    images={props.images}
                />
            </button>
        ) : 
        (
            <button 
                className={props.lightMode ? "card__mobile--2" : "card__mobile--1"}
            >
                <CarrouselImages
                    images={props.images}
                />
                <div onClick={() => props.lightMode ? window.open("https://leetcode.com/raphaeloc/", '_blank') : scrollToProject(props.currentId)} className="text-section">
                    <h4 className="text-section__title">{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </button>
        )}
        </>
    )
}