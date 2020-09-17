import React, { Component } from "react"
import "../../estilo/menusBusca.css"

export default class BarraDePesquisa extends Component{
    constructor(props){
        super(props)
        this.state = {value: ''};
        this.digitarPesquisa = this.digitarPesquisa.bind(this)
        this.validar = this.validar.bind(this)
    }
// Validação para remover #
    digitarPesquisa(event){
        var auxiliar = event.target.value.replace(/[#]/g,"");
        this.setState({
            value: auxiliar
        })
    }
// Validação para quantidade de caracteres
    validar(event){
        event.preventDefault();
        if(this.state.value.length < 3){
            alert ('Não há caracteres o suficiente para resultar numa busca.');
        }
        if(this.state.value.length > 140){
            alert ('Número máximo de caracteres atingido.');
        }
    }
// Barra de pesquisa
    render(){
        return(
        <form name="formUser" onSubmit={this.validar} action="#">
            <section id="pesq">
            <section className="barPesquisa">
                <button className="botao" type="submit" id="botao3"/>
                <input type="search" value={this.state.value} onChange={this.digitarPesquisa} id="hashTag" className="form-control" placeholder="Buscar..." />
            </section>
            </section>
        </form>
        );
    }
}
