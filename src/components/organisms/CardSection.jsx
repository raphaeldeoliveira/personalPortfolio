import React from "react";

import '../../styles/modules/cardSection/_cardSection.scss';

import photoAngelModas1 from "../../assets/images/project-cards/angelProject1.png";
import photoAngelModas2 from "../../assets/images/project-cards/angelProject2.png";
import photoAngelModas3 from "../../assets/images/project-cards/angelProject5.png";

import photoFifa1 from "../../assets/images/project-cards/fifaProject.png";
import photoFifa2 from "../../assets/images/project-cards/fifaProject2.png";
import photoFifa3 from "../../assets/images/project-cards/fifaProject3.png";

import photoProjExt1 from "../../assets/images/project-cards/projectWilson2.png";
import photoProjExt2 from "../../assets/images/project-cards/projectWilson3.png";
import photoProjExt3 from "../../assets/images/project-cards/projetoWilson.png";

import photoLeetcode from "../../assets/images/project-cards/leetcode.png"

import Card from "../molecules/cardSection/Card";

export default function CardSection(props) {

    return (
        <div className="card-section">
            <Card 
                mobile={props.mobile}
                title={props.english ? "FIFA Bot Project" : "Projeto do FIFA BOT"}
                description={props.english ? "This project is divided into three subprojects: the creation of the sales website, the development of a product (a browser extension), and the implementation of a REST API in Docker for user creation on the website." : "Este projeto está dividido em três subprojetos: a criação do site de vendas, o desenvolvimento de um produto (uma extensão para navegador) e a implementação de uma API REST em Docker para a criação de usuários no site."}
                images={[photoFifa1, photoFifa2, photoFifa3]}
            />
            <Card 
                mobile={props.mobile}
                title={props.english ? "Teaching platform" : "Plataforma de ensino"}
                description={props.english ? "This is a extension project of university which i went a front-end devolpment, building all css components and build interactivites with Vue." : "Esse é um projeto de extensão da universidade que eu fui um desenvolvedor front-end. Construi todos os componentes css e as interatividades com o vue."}
                images={[photoProjExt1, photoProjExt2, photoProjExt3]}
            />
            <Card 
                mobile={props.mobile}
                title="Angel Modas"
                description={props.english ? "This is a stock management system project created for my girlfriend's store. The idea is to have control over the products sold, track profits, among other aspects." : "Este é um projeto de sistema de gerenciamento de estoque criado para a loja da minha namorada. A ideia é ter controle sobre os produtos vendidos, acompanhar os lucros, entre outros aspectos."}
                images={[photoAngelModas1, photoAngelModas2, photoAngelModas3]}
            />
            <Card 
                mobile={props.mobile}
                title={props.english ? "My leetcode profile" : "Meu perfil do leetcode"}
                description={props.english ? "This is to demonstrate my knowledge of programming logic. All the problems are solved using the Java language." : "Isso é para comprovar meu conhecimento em lógica de programação. Todos os problemas são resolvidos utilizando a linguagem Java."}
                images={[photoLeetcode]}
                lightMode={true}
            />
        </div>
    )
}