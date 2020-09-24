import React, { Component } from "react"
import "../../estilo/sobreStyle.css"
import githubimg from "../../assets/icon-github.svg"
import envelopeimg from "../../assets//icon-envelope.svg"
import linkedinimg from "../../assets/icon-linkedin.svg"
import perfilimg from "../../assets/imagem integrante provisoria.jpg"

// Sobre o Projeto
export default class QuemSomos extends Component{
    render(){
        return(
            <section>
                <div id="quem"><h2>Quem somos</h2></div>
                    <div id="equipe">
                        <div id="integrante1" className="integrantesDaEquipe">
                            <img className="perfil" src={perfilimg} alt="" width="50%"/>
                            <h2>Nome Sobrenome</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at commodi qui accusamus cupiditate doloremque reiciendis</p>
                            <div>
                                <img className="icone"  src={githubimg} alt="" width="30px"/>
                                <img className="icone" src={envelopeimg} alt="" width="30px"/>
                                <img className="icone" src={linkedinimg} alt="" width="30px"/>
                            </div>
                        </div>
                        <div id="integrante2" className="integrantesDaEquipe">
                            <img className="perfil" src={perfilimg} alt="" width="50%"/>
                            <h2>Nome Sobrenome</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at commodi qui accusamus cupiditate doloremque reiciendis</p>
                            <div>
                                <img className="icone" src={githubimg} alt="" width="30px"/>
                                <img className="icone" src={envelopeimg} alt="" width="30px"/>
                                <img className="icone" src={linkedinimg} alt="" width="30px"/>
                            </div>
                        </div>
                        <div id="integrante3" className="integrantesDaEquipe">
                            <img className="perfil" src={perfilimg} alt="" width="50%"/>
                            <h2>Nome Sobrenome</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at commodi qui accusamus cupiditate doloremque reiciendis</p>
                            <div>
                                <img className="icone" src={githubimg} alt="" width="30px"/>
                                <img className="icone" src={envelopeimg} alt="" width="30px"/>
                                <img className="icone" src={linkedinimg} alt="" width="30px"/>
                            </div>
                        </div>
                        <div id="integrante4" className="integrantesDaEquipe">
                            <img className="perfil" src={perfilimg} alt="" width="50%"/>
                            <h2>Nome Sobrenome</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed at commodi qui accusamus cupiditate doloremque reiciendis</p>
                            <div>
                                <img className="icone" src={githubimg} alt="" width="30px"/>
                                <img className="icone" src={envelopeimg} alt="" width="30px"/>
                                <img className="icone" src={linkedinimg} alt="" width="30px"/>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}