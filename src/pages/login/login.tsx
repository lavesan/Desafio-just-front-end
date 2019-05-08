import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import justaLogo from "../../assets/imgs/logo_branco.png";
import "./login.scss";

export class LoginPage extends Component {
  state = {
    login: "",
    password: "",
    toDashboard: false
  };

  constructor(props: any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  login(e: any) {
    localStorage.setItem("auth", "true");
    this.setState({ toDashboard: true });
  }

  handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <form className="login-page" onSubmit={this.login}>
        <div className="login-box">
          <img src={justaLogo} alt="Justa" title="justa" width="120" />
          <input
            placeholder="login"
            type="text"
            name="login"
            value={this.state.login}
            onChange={this.handleChange}
          />
          <input
            placeholder="senha"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="ok-button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    );
  }
}
