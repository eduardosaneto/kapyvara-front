import { useContext} from "react";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

import QuantityContext from '../Contexts/QuantityContext';

export default function BottomBar(){

    let history = useHistory();
    const { quantity } = useContext(QuantityContext);

    function deleteLocalStorage(){
        localStorage.removeItem('user');
        history.push(`/`);
    }

    return (
        <>
            <Footer>
                <Home onClick={() => history.push(`/home`)}/>
                <CartBox>
                    <Cart onClick={() => history.push(`/cart`)}/>
                </CartBox>
                <QuantityDisplay>
                    <p>{quantity}</p>
                </QuantityDisplay>
                <Logout onClick={deleteLocalStorage}/>
            </Footer>
        </>
    );
};

const Footer = styled.footer`
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #316a37;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
`;

const CartBox = styled.div`
    width: 74px;
    height: 74px;
    display: flex;
    padding: 2px 5px 0px 0px;
    justify-content: center;
    align-items: center;
    background-color: #74B772;
    border: 1px solid #316a37;
    border-radius: 50px; 
    position: fixed;
    bottom: 10px;
    left: calc(50% - 37px);
    z-index: 15;
    cursor: pointer;
`;

const QuantityDisplay = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    padding-top: 2px;
    justify-content: center;
    align-items: center;
    background-color: #316a37;
    border-radius: 50px; 
    position: fixed;
    bottom: 49px;
    left: calc(50% + 23px);
    z-index: 20; 
    p {
        font-size: 16px;
        color: #fff;
    }
`;

const Cart = styled(IoCartOutline)`
    font-size: 55px;
    color: #fff;
`;

const Logout = styled(BiLogOut)`
    font-size: 30px;
    color: #fff;
`;

const Home = styled(AiOutlineHome)`
    font-size: 30px;
    color: #fff;
`;
