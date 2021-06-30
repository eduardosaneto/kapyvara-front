import { RegLoginContainer } from "../Structures/RegLoginContainer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Loader from "react-loader-spinner";
import Logo from "../images/Logo.png";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  function Subscribe(e) {
    e.preventDefault();
    const body = { email, name, cpf, phone, password, confirmPass };
    setDisabled(true);
    const request = axios.post("http://localhost:4000/sign-up", body);
    request.then(() => {
      alert("Cadastro feito com sucesso! Bem-vindo!");
      history.push("/");
    });
    request.catch((err) => {
      //alert("Dados inseridos incorretamente, tente novamente.");
      setDisabled(false);
      console.log(err);
    });
  }
  return (
    <>
      <RegLoginContainer>
        <img src={Logo} alt="Logo" />
        <p className="title">Kapyvara</p>
        <form onSubmit={(e) => Subscribe(e)}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setCpf(e.target.value)}
            type="text"
            placeholder="CPF"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Telefone"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            disabled={disabled}
          ></input>
          <input
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            placeholder="Confirme a senha"
            disabled={disabled}
          ></input>

          <button onClick={Subscribe} disabled={disabled}>
            {disabled ? (
              <Loader type="ThreeDots" color="#FFF" height={40} width={45} />
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>
        <Link to="/">
          <p className="register">Já tem uma conta? Entre agora!</p>
        </Link>
      </RegLoginContainer>
    </>
  );
}
