import { RegLoginContainer } from "../Structures/RegLoginContainer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Loader from "react-loader-spinner";
import Logo from "../images/Logo.png";

export default function SignIn({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  //if (localStorage.getItem("userSaved")) {
  //  history.push("/home");
  //}

  function Connect(e) {
    e.preventDefault();
    const body = { email, password };
    setDisabled(true);
    const request = axios.post("http://localhost:4000/sign-in", body);
    request.then((res) => {
      alert("Login feito com sucesso! Bem-vindo!");
      setUser(res.data);
      const userStorage = JSON.stringify(res.data);
      localStorage.setItem("userSaved", userStorage);
      setTimeout(() => {
        history.push("/home");
      }, 2000);
    });
    request.catch((err) => {
      alert("Dados inseridos incorretamente, tente novamente.");
      setDisabled(false);
    });
  }

  return (
    <>
      <RegLoginContainer>
        <img src={Logo} alt="Logo" />
        <p className="title">Kapyvara</p>
        <form onSubmit={(e) => Connect(e)}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            disabled={disabled}
          ></input>
          <button onClick={Connect} disabled={disabled}>
            {disabled ? (
              <Loader type="ThreeDots" color="#FFF" height={40} width={45} />
            ) : (
              "Entrar"
            )}
          </button>
        </form>
        <Link to="/sign-up">
          <p className="register">Primeira vez? Cadastre-se!</p>
        </Link>
      </RegLoginContainer>
    </>
  );
}
