import styled from "styled-components";

const RegLoginContainer = styled.div`
  background-color: #316a37;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  a {
    text-decoration: none;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  input {
    width: 100%;
    height: 48px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 20px;
    font-size: 20px;
    ::placeholder {
      font-size: 20px;
      padding: 10px;
      color: #C6C6C6;
    }
  }
  button {
    height: 46px;
    width: 80%;
    background-color: #5ea064;
    border: none;
    color: #fff;
    font-size: 23px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 20px;
  }
  .title {
    color: #fff;
    font-family: "Ruda";
    font-size: 32px;
    margin-bottom: 25px;
  }
  .register {
    color: #fff;
    margin-top: 10px;
    font-weight: bold;
  }
  img {
    width: 80px;
  }
`;

export { RegLoginContainer };
