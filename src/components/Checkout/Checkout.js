import Navbar from "../Navbar";
import BottomBar from "../BottomBar";
import OrderData from "./OrderData";
import ItemCards from "../Cart/ItemCards";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "../../Contexts/CartContext";
import styled from "styled-components";
import DeliveryContext from "../../Contexts/DeliveryContext";

export default function CheckOut({ user }) {
  const { cart, setCart } = useContext(CartContext);
  const { delivery, setDelivery } = useContext(DeliveryContext);
  const [total, setTotal] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  const name = user.user.userName;

  useEffect(() => {
    let totalSpent = 0;
    cart.forEach((item) => {
      totalSpent += item.price;
    });
    setTotal(totalSpent);
  }, []);

  function cancelOrder() {
    setCart([]);
    history.push("/home");
  }

  function finishOrder() {
    setDisabled(true);
    const token = user.token;
    let description = "";
    cart.forEach((item, i) => {
      description += `Item ${i + 1} - Nome: ${item.name} / Preço: ${
        item.price
      } / Qntd: ${item.quantity} / Total: ${item.price * item.quantity} \n`;
    });
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const body = {
      userId: user.user.id,
      total: total,
      description: description,
    };
    const request = axios.post("https://back-end-kapyvara.herokuapp.com/sales", body, config);
    request.then((res) => {
      setDisabled(false);
      alert("Compra finalizada com sucesso!");
      history.push("/home");
    });
    request.catch(() => {
      setDisabled(false);
      alert("Um erro inesperado ocorreu");
    });

    console.log(token);
  }

  return (
    <>
      <Navbar />
      <Container>
        <Welcome>
          <p className="title">Olá, {name}</p>
          <p className="subtitle">
            Clique em 'Finalizar pedido' para efetuar sua compra!
          </p>
        </Welcome>
        <ItemCards />
        <OrderData user={user} total={total} />
        <FinishOrder onClick={() => finishOrder()} disabled={disabled}>
          {disabled ? (
            <Loader type="ThreeDots" color="#FFF" height={40} width={45} />
          ) : (
            "Finalizar compra"
          )}
        </FinishOrder>
        <CancelOrder onClick={() => cancelOrder()}>Cancelar compra</CancelOrder>
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

const FinishOrder = styled.button`
  width: 200px;
  height: 60px;
  margin-top: 15px;
  background-color: #316a37;
  border: 1px solid #316a37;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1.0)};
`;

const CancelOrder = styled.button`
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
