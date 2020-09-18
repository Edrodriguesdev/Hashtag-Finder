import React, { Component } from "react";

import Axios from "axios";
import Logo from "./../../components/Logo";
import HomeIcon from "../../styles/assets/icon-home.svg";

import "../../styles/resetlogin.css";
import "../../styles/login.css";
//

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayError: "none",
      usuario: "",
      senha: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    //const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.id;

    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
    //fetch(
    // `http://cors-anywhere.herokuapp.com/https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbll2X6iiQTi0jKCf?api_key=keyfV0AwOq2Pctb5Y&filterByFormula=(AND({Email}="' + this.state.login + '",{Senha}="' + this.state.senha + '"))')`
    Axios.get(
      'https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbll2X6iiQTi0jKCf?api_key=keyfV0AwOq2Pctb5Y&filterByFormula=(AND({Email}="' +
        this.state.usuario +
        '",{Senha}="' +
        this.state.senha +
        '"))'
    ).then((res) => {
      if (res.data.records.length > 0) {
        window.sessionStorage.setItem("login", "true");
        this.setState({ path: true });
      } else {
        this.setState({
          displayError: "block",
        });
      }
    });
  };

  render() {
    const { usuario, senha } = this.state;
    if (this.state.path && window.sessionStorage.getItem("login") === "true") {
      //return <Redirect to="" component={Management} />;
      return <div>Logado</div>;
    } else {
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

          <form id="form" name="myForm" action="" onSubmit={this.handleSubmit}>
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
                  name="senha"
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
}
export default Login;
