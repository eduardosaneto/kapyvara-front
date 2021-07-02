import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "./Navbar";
import Products from "./Products";
import BottomBar from "./BottomBar";

import loading from "../images/loading.svg";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [kapypromo, setKapypromo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    setCatalog([]);
    setIsLoading(true);
    // const request = axios.get('https://localhost:4000/home', config);
    const request = axios.get("http://localhost:4000/home");
    request.then((response) => {
      setCatalog(response.data);
      const forSale = response.data.filter((c) => c.forsale === "Sim");
      setKapypromo(forSale);
      setIsLoading(false);
    });
    request.catch(() => {
      setIsError(true);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      <Navbar />
      {isLoading ? (
        <Load>
          <div>
            <img src={loading} alt="Loading" />
            Loading...
          </div>
        </Load>
      ) : (
        ""
      )}
      {isError ? (
        <Load>
          Houve uma falha ao obter o catálogo de produtos, <br /> por favor
          atualize a página
        </Load>
      ) : (
        ""
      )}
      <SaleBox>
        <SaleProduct>
          {kapypromo.map((k) => (
            <>
              <div>
                <img src={k.image} alt={k.name} />
              </div>
              <SaleProductInfo>
                <span>
                  <h1>{k.name}</h1>
                </span>
                <h2>R${k.price},00</h2>
              </SaleProductInfo>
            </>
          ))}
        </SaleProduct>
        <SaleText>
          <h1>Kapypromo do dia</h1>
        </SaleText>
      </SaleBox>
      <Products catalog={catalog} />
      <BottomBar />
    </Container>
  );
}

const Container = styled.section`
  max-width: 600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 155px 10px 70px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;

const SaleBox = styled.div`
  height: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #316a37;
  border-radius: 5px;
`;

const SaleProduct = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  border-bottom: 1px solid #4c7e47;
  div:first-child {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    max-width: 185px;
    max-height: 135px;
    object-fit: cover;
  }
`;

const SaleProductInfo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  padding: 25px 5px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  span {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    span {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 16px;
        line-height: 19px;
    }
    h2 {
        font-size: 26px;
        font-weight: bold;
    }
`;

const SaleText = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #316a37;
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin-bottom: 3px;
  }
`;

const Load = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #6d6d6d;
  font-size: 36px;
  padding-top: 35px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #6d6d6d;
    font-size: 30px;
    padding-top: 30px;
  }
  img {
    height: 100px;
    width: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
