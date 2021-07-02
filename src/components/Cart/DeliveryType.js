import styled from "styled-components";
import { useState, useContext } from "react";
import DeliveryContext from "../../Contexts/DeliveryContext";

export default function DeliveryType() {
  const [store, setStore] = useState(false);
  const [mail, setMail] = useState(false);

  const { delivery, setDelivery } = useContext(DeliveryContext);

  function checkStore() {
    if (store) {
      setStore(false);
      setDelivery("");
    } else {
      setMail(false);
      setStore(true);
      setDelivery("Rerirada em loja");
    }
  }
  function checkMail() {
    if (mail) {
      setMail(false);
      setDelivery("");
    } else {
      setMail(true);
      setStore(false);
      setDelivery("Correios");
    }
  }

  return (
    <>
      <Delivery>
        <p>Por favor, escolha o tipo de entrega dos produtos</p>
        <div>
          <Store isChosen={store} onClick={() => checkStore()}>
            Retirada em loja
          </Store>
          <Mail isChosen={mail} onClick={() => checkMail()}>
            Correios (7 a 15 dias úteis)
          </Mail>
        </div>
      </Delivery>
    </>
  );
}
const Delivery = styled.div`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  font-size: 20px;
  color: #316a37;
  font-weight: bold;
  div {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }
`;
const Store = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => (props.isChosen ? "#316a37" : "#fff")};
  border: 1px solid #316a37;
  border-radius: 5px;
  color: ${(props) => (props.isChosen ? "#fff" : "#316a37")};
  font-weight: bold;
`;

const Mail = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => (props.isChosen ? "#316a37" : "#fff")};
  border: 1px solid #316a37;
  border-radius: 5px;
  color: ${(props) => (props.isChosen ? "#fff" : "#316a37")};
  font-weight: bold;
`;
