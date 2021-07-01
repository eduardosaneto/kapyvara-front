import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { IoIosSearch } from "react-icons/io";
import { BiMap } from 'react-icons/bi'

import Logo from "../images/Logo.png";

export default function Navbar(){

    const [search, setSearch] = useState("");

    function searchProduct(e) {    
        setSearch(e.target.value);
        if(search.lenght <= 2) {
            setSearch('');
            return
        };
    };


    return (
        <>
            <Header>
                <Img></Img>
                <Form>
                    <DebounceInput 
                        type="text" placeholder="Pesquise na Kapyvara.com" 
                        value={search} onChange={searchProduct}
                        className="search-box" debounceTimeout={300}
                    />
                    <button type="submit">
                        <IoIosSearch className="search"/>  
                    </button>
                </Form>
            </Header>
            <Position>
                <MapIcon />
                <p>Localização desativada</p>
            </Position>
        </>
    );
}

const Header = styled.header`
    width: 100%;
    height: 110px;
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
`;

const Form = styled.form`
    width: 100%;
    position: relative;
    .search-box {
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
    button {
        height: 40px;
        border: none;
        border-radius: 5px;
        padding: 8px;
        position: absolute;
        top: 0px;
        right: 0px;
        background: #fff;
    }
    .search {
        font-size: 26px;
        color: #316a37;
        cursor: pointer;
    }
`;

const Img = styled.div`
    height: 50px;
    width: 85px;
    background-image: url("${Logo}");
    background-size: cover;
    background-position: center;
`;

const Position = styled.span`
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #4C7E47; 
    position: fixed;
    top: 110px;
    left: 0;
    z-index: 10;
    p {
        font-size: 12px;
        margin-top: 2px;
        margin-left: 5px;
        color: #fff;

    }
`;

const MapIcon = styled(BiMap)`
    font-size: 15px;
    color: #fff;
`