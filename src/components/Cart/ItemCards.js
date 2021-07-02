import styled from "styled-components";

export default function ItemCards() {
  return (
    <>
      <ItemCard>
        <ProductImage>
          <img
            src="https://kalibrado.com/wp-content/uploads/2017/04/EGNT-Black-Carbon-ID-Wallet.jpg"
            alt="product_image"
          />
        </ProductImage>
        <ProductDescription>
          <div className="title">Kapyvara Leather Slim</div>
          <div>Valor Unit: R$ 150,00</div>
          <div>Qntd: 2</div>
          <div className="total">Total: R$ 300,00</div>
        </ProductDescription>
      </ItemCard>
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
