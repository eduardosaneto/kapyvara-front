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
            <Products />
        </Container>
    );
}

const Container = styled.section`
    max-width: 600px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 115px 10px 70px 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
`;

const Spotlight = styled.div`
    height: 210px;
    width: 100%;
    background-color: #4C7E47;
`;

