import Navbar from "../Navbar";
import BottomBar from "../BottomBar";
import ItemCards from "./ItemCards";
import DeliveryType from "./DeliveryType";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import styled from "styled-components";
import DeliveryContext from "../../Contexts/DeliveryContext";

export default function Cart({ user }) {
  const { setCart } = useContext(CartContext);
  const { delivery, setDelivery } = useContext(DeliveryContext);
  const history = useHistory();

  const name = user.user.userName;

  function confirmOrder() {
    if (!delivery) {
      alert(
        "Você precisa escolher alguma forma de receber o produto: Escolha entre 'Retirada em loja' ou 'Correios''"
      );
    } else {
      history.push("/checkout");
    }
  }

  function clearCart() {
    setCart([]);
    setDelivery("");
    history.push("/home");
  }
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
        <ConfirmItens onClick={() => confirmOrder()}>
          Confirmar pedido
        </ConfirmItens>
        <ClearCart onClick={() => clearCart()}>Limpar carrinho</ClearCart>
      </Container>
      <BottomBar />
    </>
  );
}

const Container = styled.section`
  max-width: 600px;
  width: 100%;
  margin-top: 100px;
  padding: 50px 10px;
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

const ConfirmItens = styled.button`
  width: 200px;
  height: 60px;
  background-color: #316a37;
  border: 1px solid #316a37;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const ClearCart = styled.button`
  width: 120px;
  height: 30px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #316a37;
  border-radius: 5px;
  color: #316a37;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 50px;
`;
