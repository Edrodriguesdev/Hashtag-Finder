import React, { Component } from "react"
import "../../estilo/menusBusca.css"

// Plano de fundo
export default class PlanoDeFundo extends Component{
    render(){
        return(
    <section className="bg">
        <section id="titulo">
            <h1 id="ttit">Encontre hashtags de maneira fácil</h1>
        </section>
        <section id="descricao">
            <h4 id="tdesc">Digite o que deseja no campo de buscas e
                confira os resultados do Twitter abaixo</h4>
        </section>
    </section>
        );
    }
}
