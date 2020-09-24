import React, { Component } from "react";

import Logo from "./../../components/Logo";
import HomeIcon from "../../styles/assets/icon-home.svg";

import "../../styles/resetlogin.css";
import "../../styles/login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayError: "none",
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  credenciaiscocreare = {
    usuario: "academy@cocreare.com.br",
    password: "123456",
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.id;

    this.setState({
      [name]: value,
    });
  }
  validateForm(event) {
    event.preventDefault();

    if (
      this.state.usuario == this.credenciaiscocreare.usuario &&
      this.state.senha == this.credenciaiscocreare.password
    ) {
      window.location.href = "http://google.com";
    } else {
      this.setState({
        displayError: "block",
      });

      return false;
    }
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <Logo />
            <div className="menu">
              <button className="home" alt="Home Icon">
                <img src={HomeIcon} alt="Home Icon" />
                Home
              </button>
            </div>
          </nav>
        </header>

        <form id="form" name="myForm" action="" onSubmit={this.validateForm}>
          <div className="section-content">
            <div className="login">
              <h3>Login</h3>
              <label htmlFor=""></label>
              <br />
              <input
                name="usuario"
                id="usuario"
                value={this.state.usuario}
                onChange={this.handleChange}
                type="email"
                placeholder="Usúario"
                required
              />
              <br />
              <label htmlFor=""></label>
              <br />
              <input
                data-password="123456"
                id="senha"
                value={this.state.senha}
                onChange={this.handleChange}
                type="password"
                placeholder="Senha"
                required
              />
              <br />
              <button type="submit" className="acessar" href="#">
                Acessar
              </button>
              <p id="erro" style={{ display: this.state.displayError }}>
                Credenciais inválidas
              </p>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default Login;
