import styled from "styled-components";
import axios from "axios";
import Logo from "../images/Logo.png";

export default function Navbar(){
    return (
        <>
            <Header>
                <Img></Img>
                <input type="text" placeholder="Pesquise na Kapyvara.com"/>
            </Header>
        </>
    );
}

const Header = styled.header`
    width: 100%;
    height: 100px;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #316a37;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        font-size: 18px;
        color: #1B3D1F;
        ::placeholder {
            color: #C6C6C6;
            font-style: italic;
        }
        :focus {
            border: 0px solid #333;
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
`;

const Img = styled.div`
    height: 50px;
    width: 85px;
    background-image: url("${Logo}");
    background-size: cover;
    background-position: center;
`;