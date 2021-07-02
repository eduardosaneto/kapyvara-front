import Navbar from "../Navbar";
import BottomBar from "../BottomBar";
import ItemCards from "./ItemCards";
import DeliveryType from "./DeliveryType";
import Loader from "react-loader-spinner";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import styled from "styled-components";

export default function Cart({ user }) {
  const { cart } = useContext(CartContext);
  const name = user.user.userName;
  return (
    <>
      <Navbar />
      <Container>
        <Welcome>
          <p className="title">Seu carrinho</p>
          <p className="subtitle">
            Olá {name}, por favor, verifique os itens de sua compra e insira seu
            endereço.
          </p>
        </Welcome>
        <ItemCards />
        <DeliveryType />
      </Container>
      <BottomBar />
    </>
  );
}

const Container = styled.section`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 155px 10px 70px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Welcome = styled.div`
  width: 100%;
  margin-left: 30px;
  margin-top: 10px;
  color: #316a37;
  font-weight: bold;
  .title {
    font-size: 27px;
  }
  .subtitle {
    font-size: 16px;
    margin-top: 10px;
  }
`;
