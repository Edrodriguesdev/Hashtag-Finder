import React, { Component } from "react"
import "../../estilo/sobreStyle.css"
import sobreimg from "../../assets/about-illustration.svg"

// Sobre o Projeto
export default class SobreProjeto extends Component{
    render(){
        return(
            <section>
                <div className="divLeft">
                        <div className="textDiv">
                            <h2><i id="spacetext" className="fa_search"></i>Sobre o Projeto</h2>
                        </div>		
                    </div>
                    <div id="sobre">
                        <div id="descricaoSobre">
                            <h2>O que é</h2>
                            <p>O Hashtag Finder é um projeto realizado junto a Cocreare
                            Academy, com objetivo desenvolver nossas habilidades em
                            HTML, CSS, JavaScript e Frameworks. O objetivo principal
                            do site, é buscar por uma hashtag especifica, mostrando as 
                            ultimas publicações e imagens feitas por usuarios do 
                            Twitter utilizando essa Hashtag. O site tambem possui
                            uma area restrita, onde o usuario pode realizar login e
                            vizualizar o historico de Hashtags buscadas anteriormente.</p>
                        </div>
                        <div id="imagemSobre">
                            <img src={sobreimg}/>
                        </div> 
                        
                    </div>
            </section>
        );
    }
}
