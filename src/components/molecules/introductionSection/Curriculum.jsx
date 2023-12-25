import React from "react";

export default function Curriculum(props) {

    return (
        <div
            className="curriculum"
            style={{ display: (props.resumeActive ? "block" : "none") }}
        >
            <h4 className="curriculum__title">{props.english ? "Brazilian, single, 22 years old, Lages SC" : "Brasileiro, solteiro, 22 anos, Lages SC"}</h4>
            <h4 className="curriculum__title">(47) 98447-0822 - rafaolive3003@gmail.com</h4>

            <h2>{props.english ? "EDUCATION" : "EDUCAÇÃO"}</h2>
            <hr/>
            <div className="curriculum__dual-text">
                <span className="curriculum__dual-text--left">INSTITUTO FEDERAL DE SANTA CATARINA</span>
                <span className="curriculum__dual-text--right">Lages, SC</span>
            </div>
            <br/>
            <div className="curriculum__dual-text">
                <span className="curriculum__dual-text--left italic">{props.english ? "Bachelor's Degree in Computer Science" : "Bacharelado em ciência da computação"}</span>
                <span className="curriculum__dual-text--right italic">2022 - {props.english ? "present" : "atual"}</span>
            </div>
            <br/>
            <p>{props.english ? "Currently in the 3rd semester. Focused on enhancing my skills in front-end and back-end programming. Planning to specialize in neural networks and data science in the upcoming phases." : "Atualmente estou no 3° período. Estou focando em aprimorar minhas habilidades em programação front-end e back-end. Para as próximas fases pretendo me concentrar em redes neurais e ciência de dados."}</p>

            <h2>{props.english ? "EXPERIENCE" : "EXPERIÊNCIA"}</h2>
            <hr/>
            <p>{props.english ? "Currently, I do not have professional experience as a developer. However, I have worked on several personal projects that can be accessed on my website or GitHub." : "No momento, ainda não tenho experiência profissional como desenvolvedor. Porém tenho alguns projetos pessoais que podem ser acessados no meu site ou github."}</p>
            <div className="curriculum__dual-text">
                <span className="curriculum__dual-text--left">{props.english ? "EXTENSION PROJECT, IFSC" : "PROJETO DE EXTENSÃO, IFSC"}</span>
                <span className="curriculum__dual-text--right">Lages, SC</span>
            </div>
            <br/>
            <div className="curriculum__dual-text">
                <span className="curriculum__dual-text--left italic">{props.english ? "Front-end Developer" : "Desenvolvedor Front-end"}</span>
                <span className="curriculum__dual-text--right italic">{props.english ? "Jul 1 - Dec 30, 2022" : "1 jul - 30 dez, 2022"}</span>
            </div>
            <br/>
            <p>{props.english ? "Developed all visual components of the website, including design exploration, typography, and color schemes. Implemented user interaction using Vue.js." : "Desenvolvi todos os componentes visuais do site incluindo estudo de design, fontes e cores. Além de desenvolver toda a parte de interação com o usuário usando Vue.js."}</p>

            <h2>{props.english ? "ADDITIONAL INFORMATION" : "INFORMAÇÕES ADICIONAIS"}</h2>
            <hr/>
            <p><strong>{props.english ? "Skills:" : "Habilidades:"}</strong> {props.english ? " Proficient in JavaScript, Vue.js, and Java; Proficient in object-oriented programming and developing systems with graphical interfaces." : " Conhecimento médio Javascript, Vue.js e Java; Já dominando orientação a objetos e criação de sistemas com interface gráfica."}</p>
            <p><strong>{props.english ? "Languages:" : "Idiomas:"}</strong> {props.english ? " Fluent in Portuguese and intermediate English." : " Português fluente e inglês intermediário."}</p>

        </div>
    )
}