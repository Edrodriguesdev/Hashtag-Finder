import React, { Component } from "react"
import "../../estilo/menusBusca.css"
<<<<<<< HEAD
=======
import Carrossel from './Carrossel';
import Postagens from "./Postagens";
>>>>>>> Pagina-inicial

export default class BarraDePesquisa extends Component{
    constructor(props){
        super(props)
<<<<<<< HEAD
        this.state = {value: ''};
=======
        this.state = {
            value: '',
            statuses: []
        };
>>>>>>> Pagina-inicial
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
<<<<<<< HEAD
        }
        if(this.state.value.length > 140){
            alert ('Número máximo de caracteres atingido.');
        }
=======
            return
        }
        if(this.state.value.length > 140){
            alert ('Número máximo de caracteres atingido.');
            return
        }

        var myHeaders = new Headers();
        myHeaders.append("authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q="+this.state.value+"&result_type=popular", requestOptions)
        .then(response => response.json())
        .then(result => {
            // alert("Funcionou!");
            // console.log(result);
            this.setState({
                statuses: result.statuses
            })

        })
        .catch(error => console.log('error', error));

>>>>>>> Pagina-inicial
    }
// Barra de pesquisa
    render(){
        return(
<<<<<<< HEAD
        <form name="formUser" onSubmit={this.validar} action="#">
            <section id="pesq">
            <section className="barPesquisa">
                <button className="botao" type="submit" id="botao3"/>
                <input type="search" value={this.state.value} onChange={this.digitarPesquisa} id="hashTag" className="form-control" placeholder="Buscar..." />
            </section>
            </section>
        </form>
=======
            <>
                <form name="formUser" onSubmit={this.validar} action="#">
                    <section id="pesq">
                    <section className="barPesquisa">
                        <button className="botao" type="submit" id="botao3"/>
                        <input type="search" value={this.state.value} onChange={this.digitarPesquisa} id="hashTag" className="form-control" placeholder="Buscar..." />
                    </section>
                    </section>
                </form>
                <Carrossel statuses={this.state.statuses} />
                <Postagens statuses={this.state.statuses} />
            </>
>>>>>>> Pagina-inicial
        );
    }
}
