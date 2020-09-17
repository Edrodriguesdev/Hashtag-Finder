import React, { Component } from "react"
import "../../estilo/menusBusca.css"

// Função de transição de menu do topo
function substMenu() {
    if (window.scrollY >= 119) {
        if (document.querySelector('.menuSup')) {
        document.querySelector('.menuSup').classList.add('menuSupDesf');
        document.querySelector('.menuSup').classList.remove('menuSup');
        }
    } else {
        if (document.querySelector('.menuSupDesf')) {
            document.querySelector('.menuSupDesf').classList.add('menuSup');
            document.querySelector('.menuSupDesf').classList.remove('menuSupDesf');
        }
    }
}
window.addEventListener("scroll", substMenu);
// Topo, botões de login e sobre, imagem do background
export default class Topo extends Component{
    render(){
        return(
        <header className="menuSup">
        <section className="linktitulo">
            <span><a href="/">hashtag<strong>finder</strong></a></span>
        </section>
        <section className="menu">
            <a href="/sobre">
                <button className="botaomenu" id="botaosobre">
                    <b>SOBRE</b>
                </button>
            </a>
            <a href="/login">
                <button className="botaomenu" id="botaologin">
                    <b>LOGIN</b>
                </button>
            </a>
        </section>
        <section className="clear"></section>
        </header>
        );
    }
}
