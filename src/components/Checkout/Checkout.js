import Navbar from "../Navbar";
import BottomBar from "../BottomBar";
import OrderData from "./OrderData";
import ItemCards from "../Cart/ItemCards";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Contexts/CartContext";
import styled from "styled-components";
import DeliveryContext from "../../Contexts/DeliveryContext";

export default function CheckOut({ user }) {
  const { cart, setCart } = useContext(CartContext);
  const { delivery, setDelivery } = useContext(DeliveryContext);
  const [total, setTotal] = useState(0);
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
        <OrderData user={user} />
        <FinishOrder>Finalizar compra</FinishOrder>
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
  margin-top: 20px;
  background-color: #316a37;
  border: 1px solid #316a37;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
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
