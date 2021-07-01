import styled from "styled-components";
import axios from "axios";
import Navbar from "./Navbar";
import Products from "./Products";
import carteira from "../images/carteira.JPG";

export default function Home(){

    return (
        <Container>
            <Navbar/>
            <SaleBox>
                <SaleProduct>
                    <div>
                        <img src={carteira} alt="carteira"/>
                    </div>
                    <SaleProductInfo >
                        <span>
                            <h1>Kapyvara Leather Slim</h1>
                        </span>
                        <h2>R$200,00</h2>
                    </SaleProductInfo >
                </SaleProduct>
                <SaleText>
                    <h1>Kapypromo do dia</h1>
                </SaleText>
            </SaleBox>
            <Products />
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
    border-bottom: 1px solid #4C7E47;
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
        align-items: center;
        margin-bottom: 20px;
    }
    h1 {
        font-size: 16px;
        line-height: 19px;
    }
    h2 {
        font-size: 26px;
        font-style: bold;
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

