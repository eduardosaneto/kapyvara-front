import styled from "styled-components";
import axios from "axios";
import carteira from "../images/carteira.JPG";

export default function Products(){
    return (
        <List>
            <li>
                <div>
                    <img src={carteira} alt="carteira"/>
                </div>
                <ProductInfos>
                    <span>
                        <h1>Kapyvara Leather Slim</h1>
                    </span>
                    <h2>R$200,00</h2>
                </ProductInfos>                
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </List>
    );
}

const List = styled.ul`
    width: 100%;
    display: flex;
    padding: 20px 0px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    li {
        width: calc(50% - 5px);
        height: 210px;
        margin-bottom: 8px; 
        border: 1px solid #316a37;       
        border-radius: 5px;
    }
    div:first-child {
        height: 140px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 0.5px solid rgba(76, 126, 71, 0.3);
    }
    img {
        width: 100%;
        max-width: 162px;
        max-height: 118px;
        object-fit: cover;
    }
`;

const ProductInfos = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    padding: 2px 5px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    span {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
    }
    h1 {
        font-size: 14px;
        text-align: center;
        line-height: 15px;
    }
    h2 {
        font-size: 18px;
        font-style: bold;
        text-align: center;
    }
`;