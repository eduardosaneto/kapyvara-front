import styled from "styled-components";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";

export default function ItemCards() {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.map((item) => {
        return (
          <ItemCard>
            <ProductImage>
              <img src={item.image} alt="product_image" />
            </ProductImage>
            <ProductDescription>
              <div className="title">{item.name}</div>
              <div>Valor Unit: R$ {item.price},00</div>
              <div>Qntd: {item.quantity}</div>
              <div className="total">
                Total: R$ {item.quantity * item.price},00
              </div>
            </ProductDescription>
          </ItemCard>
        );
      })}
    </>
  );
}

const ItemCard = styled.div`
  height: 163px;
  width: 95%;
  margin-top: 10px;
  background-color: #316a37;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const ProductImage = styled.div`
  height: 90px;
  background-color: #fff;
  width: 90px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  img {
    width: 100%;
  }
`;

const ProductDescription = styled.div`
  width: 75%;
  height: 100px;
  color: #fff;
  margin-left: 15px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-weight: bold;
    font-size: 21px;
  }
  .total {
    font-weight: bold;
  }
`;
