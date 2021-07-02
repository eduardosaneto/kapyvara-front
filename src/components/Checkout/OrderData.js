import styled from "styled-components";
import { useContext } from "react";
import DeliveryContext from "../../Contexts/DeliveryContext";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";

export default function OrderData({ user, total }) {
  const { delivery } = useContext(DeliveryContext);

  return (
    <>
      <DataList>
        <li>Nome: {user.user.userName}</li>
        <li>CPF: {user.user.cpf}</li>
        <li>Telefone p/ contato: {user.user.phone}</li>
        <li>Total da compra: R$ {total},00</li>
        <li>Tipo de entrega: {delivery}</li>
      </DataList>
    </>
  );
}

const DataList = styled.ul`
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
  li {
    font-size: 20px;
    font-weight: bold;
    color: #316a37;
    margin-bottom: 10px;
  }
`;
