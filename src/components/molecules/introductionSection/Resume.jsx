import React from "react";

export default function Resume(props) {
    

    return (
        <div
            className="resume"
            style={{ display: (props.resumeActive ? "none" : "block") }}
        >
            <h1 className="resume__title">RAPHAEL</h1>
            <h1 className="resume__title--lastName">CARVALHO</h1>

            {<p className="resume__paragraph">
                {props.english ? 
                    "I'm a student of computer cience on Instituto Federal de Santa Catarina. Focused on becoming a fullstack developer. My actual skills is: " : 
                    "Sou um estudante de ciência da computação no Instituto Federal de Santa Catarina. Focado em me tornar um desenvolvedor fullstack. Minhas principais habilidades são: "
                } 
                Html, Css, Javascript, 
                <span className="tec-labels--react">React</span> 
                {props.english ? 
                    " and " : 
                    " e "
                } 
                <span className="tec-labels--java">Java</span> 
                {props.english ? 
                    " whit " : 
                    " com "
                } 
                <span className="tec-labels--spring">Spring Boot</span>.  
                {props.english ? 
                    " But studying to become a great programmer. I have so much interesse in tech and search upgrade my skills day by day." : 
                    " Mas estudando para me tornar um grande programador."
                }
            </p>}
        </div>
    )
}