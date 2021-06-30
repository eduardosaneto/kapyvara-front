import styled from "styled-components";
import axios from "axios";
import Navbar from "./Navbar";
import Products from "./Products";

// import { Container } from "../styledComponents/Content";

export default function Home(){
    return (
        <Container>
            <Navbar/>
            <Spotlight>
                
            </Spotlight>
            {/* <Products /> */}
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    height: 100%;
    padding: 115px 10px 70px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
`;

const Spotlight = styled.div`
    height: 150px;
    width: 100%;
    background-color: #316a37;
`;

