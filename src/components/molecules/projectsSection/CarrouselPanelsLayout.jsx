import React from "react";

import Panel from "./Panel";

import imgFifaDesktop1 from "../../../assets/images/project-images/desktop/fifa1.png"
import imgFifaDesktop2 from "../../../assets/images/project-images/desktop/fifa2.png"
import imgFifaDesktop3 from "../../../assets/images/project-images/desktop/fifa3.png"
import imgFifaDesktop4 from "../../../assets/images/project-images/desktop/fifa4.png"
import imgFifaDesktop5 from "../../../assets/images/project-images/desktop/fifa5.png"
import imgFifaDesktop6 from "../../../assets/images/project-images/desktop/fifa6.png"
import imgFifaMobile1 from "../../../assets/images/project-images/mobile/fifa1.png"
import imgFifaMobile2 from "../../../assets/images/project-images/mobile/fifa2.png"
import imgFifaMobile3 from "../../../assets/images/project-images/mobile/fifa3.png"
import imgFifaMobile4 from "../../../assets/images/project-images/mobile/fifa4.png"
import imgFifaMobile5 from "../../../assets/images/project-images/mobile/fifa5.png"
import imgFifaMobile6 from "../../../assets/images/project-images/mobile/fifa6.png"

import imgProjExtDesktop1 from "../../../assets/images/project-images/desktop/projetoExtensao1.png"
import imgProjExtDesktop2 from "../../../assets/images/project-images/desktop/projetoExtensao2.png"
import imgProjExtDesktop3 from "../../../assets/images/project-images/desktop/projetoExtensao3.png"
import imgProjExtDesktop4 from "../../../assets/images/project-images/desktop/projetoExtensao4.png"
import imgProjExtMobile1 from "../../../assets/images/project-images/mobile/projetoExtensao1.png"
import imgProjExtMobile2 from "../../../assets/images/project-images/mobile/projetoExtensao2.png"
import imgProjExtMobile3 from "../../../assets/images/project-images/mobile/projetoExtensao3.png"
import imgProjExtMobile4 from "../../../assets/images/project-images/mobile/projetoExtensao4.png"

import imgAngelModasDesktop1 from "../../../assets/images/project-images/desktop/angel1.png"
import imgAngelModasDesktop2 from "../../../assets/images/project-images/desktop/angel2.png"
import imgAngelModasDesktop3 from "../../../assets/images/project-images/desktop/angel3.png"
import imgAngelModasDesktop4 from "../../../assets/images/project-images/desktop/angel4.png"
import imgAngelModasDesktop5 from "../../../assets/images/project-images/desktop/angel5.png"
import imgAngelModasMobile1 from "../../../assets/images/project-images/mobile/angel1.png"
import imgAngelModasMobile2 from "../../../assets/images/project-images/mobile/angel2.png"
import imgAngelModasMobile3 from "../../../assets/images/project-images/mobile/angel3.png"
import imgAngelModasMobile4 from "../../../assets/images/project-images/mobile/angel4.png"
import imgAngelModasMobile5 from "../../../assets/images/project-images/mobile/angel5.png"

export default function CarrouselPanelsLayout(props) {

    return (
        <div className="carrousel__layout">
            <div 
                className="carrousel__inside"
                style={{
                    transform: `translateY(${props.scrollY}vw)`
                }}
            >
                <Panel 
                    mobile={props.mobile}
                    paragraphText={props.english ? "This is my most robust project. I created a product: an extension capable of earning FIFA coins. In addition to the tool, a website was developed, which is a complete system with integrated backend and frontend connected to a database." : "Este é meu projeto mais robusto. Criei um produto: uma extensão capaz de ganhar moedas no FIFA. Além da ferramenta foi desenvolvido um site que é um sistema completo com backend e frontend integrados a um banco de dados."}
                    optionsMenu={props.english ? ["Functionality", "Profitability", "Apprenticeship"] : ["Funcionamento", "Rentabilidade", "Aprendizado"]}
                    optionsMenutext={props.english ? ["The software will be a browser extension written in Javascript. The user will need a login and password to access the program, which may or may not be maintained depending on the payment of the monthly fee. The website's REST API was written in Java with Spring Boot. As for the website's front-end, it was written in Vue. For the database, I used MySQL in a Docker container.", "The sources of income for the system will be through sales of system subscriptions and the sale of in-game currency (which will be earned through the software itself).", "I learned JS and gained an understanding of security principles and authentication to implement the login and password system. Furthermore, integrating the back-end and front-end of the website allowed me to explore different technologies and frameworks, such as Java with Spring Boot for the REST API and Vue for the front-end."] : ["O software será uma extensão de navegador escrito em Javascript. O usuario precisará de um login e senha para abrir o programa, o qual é mantido ou não mediante o pagamento da mensalidade. A API Rest do site foi escrita em Java com Springboot. Já o front do site foi escrito em Vue. Para o banco de dados, utilizei o MySQL em um container Docker.", "As fontes de renda do sistema serão por meio de vendas de assinaturas do sistema e venda de moedas do jogo (que serão conquistadas através do proprio software).", "Aprendi JS, bem como a compreensão dos princípios de segurança e autenticação para implementar o sistema de login e senha. Além disso, a integração do back-end e do front-end do site me permitiu explorar diferentes tecnologias e frameworks, como Java com Spring Boot para a API Rest e Vue para o front-end."]}
                    images={props.mobile ? [imgFifaMobile1, imgFifaMobile2, imgFifaMobile3, imgFifaMobile4, imgFifaMobile5, imgFifaMobile6] : [imgFifaDesktop1, imgFifaDesktop2, imgFifaDesktop3, imgFifaDesktop4, imgFifaDesktop5, imgFifaDesktop6]}
                    bgMenuColor={["#accfdb", "#1e9dcc"]}
                />
                <Panel 
                    mobile={props.mobile}
                    paragraphText={props.english ? "A extension project was developed to assist beginners in programming by providing exercises and solutions in three languages: Java, Javascript and Python. In addition to myself, 15 other students contributed to the development." : "Um projeto de extensão desenvolvido para auxiliar iniciantes na programação, oferecendo exercícios e soluções em três linguagens: Java, Javascript e Python. Além de mim mais 15 estudantes auxiliaram no desenvolvimento."}
                    optionsMenu={props.english ? ["Functionality", "Apprenticeship"] : ["Funcionamento", "Aprendizado"]}
                    optionsMenutext={props.english ? ["The project features 500 programming exercises divided into easy, medium, and difficult levels. All exercises have been solved by students participating in the project. The exercise topics cover expressions, selection, loops, arrays, strings, matrices, and functions.", "Through this project, I have learned how to utilize media queries and make the website fully responsive. Additionally, I have gained knowledge in working with Vue.js and creating more advanced interactions. My ability to create stylish components (CSS) and understanding of design principles such as color harmony and font selection have also significantly improved."] : ["O projeto consiste em um site abrangente com 500 exercícios de programação, categorizados em níveis de dificuldade: fácil, médio e difícil. Todos os exercícios foram resolvidos por alunos do projeto. Os tópicos abordados incluem expressões, seleção, repetição, vetores, strings, matrizes e funções.", "Durante o desenvolvimento desse projeto, adquiri habilidades em várias áreas. Aprendi a utilizar media queries para tornar o site totalmente responsivo, a trabalhar com Vue.js para criar interações mais complexas, e aprimorei minhas habilidades na criação de componentes estilizados em CSS."]}
                    images={props.mobile ? [imgProjExtMobile1, imgProjExtMobile2, imgProjExtMobile3, imgProjExtMobile4] : [imgProjExtDesktop1, imgProjExtDesktop2, imgProjExtDesktop3, imgProjExtDesktop4]}
                    bgMenuColor={["#e9c0ac", "#E57A44"]}
                />
                <Panel 
                    mobile={props.mobile}
                    paragraphText={props.english ? "A project to assist in sales management and financial control for a clothing store, keeping track of investment, revenue, profit and projections. The design was specifically tailored for my girlfriend." : "Um projeto para auxiliar na gestão de vendas e controle financeiro de uma loja de venda de roupas, mantendo o controle do investimento, faturamento, lucro e prespectivas. O design foi feito especialmente para minha namorada."}
                    optionsMenu={props.english ? ["Functionality", "Apprenticeship"] : ["Funcionamento", "Aprendizado"]}
                    optionsMenutext={props.english ? ["The system features a main menu with options for investment, revenue, and profit (actual and expected). These data are entered through the input of products purchased for resale. Products can be sold, returned, or lost, and they are organized in separate lists for available and sold items. The system also includes search bars and filters to easily find products in both lists.", "Through this project, I gained a solid understanding of object-oriented programming and learned to implement the MVC (Model-View-Controller) design pattern. Additionally, I acquired skills in creating user interfaces using the Swing framework (Java)."] : ["O sistema possui um menu principal com opções de investimento, faturamento e lucro (real e esperado). Esses dados são inseridos através da entrada dos produtos adquiridos para revenda. Os produtos podem ser vendidos, devolvidos e extraviados, alternando entre as listas de produtos disponíveis e vendidos. Além disso, o sistema possui barras de busca e filtros para facilitar a localização de produtos em ambas as listas.", "Com esse projeto, adquiri um bom conhecimento em orientação a objetos, aprendi a utilizar o padrão de arquitetura MVC (Model-View-Controller) e também a criar interfaces de usuário usando o Swing (Java)."]}
                    images={props.mobile ? [imgAngelModasMobile1, imgAngelModasMobile2, imgAngelModasMobile3, imgAngelModasMobile4, imgAngelModasMobile5] : [imgAngelModasDesktop1, imgAngelModasDesktop2, imgAngelModasDesktop3, imgAngelModasDesktop4, imgAngelModasDesktop5]}
                    bgMenuColor={["#db9dd3", "#aa3c9b"]}
                />
            </div>
        </div>
    )
}