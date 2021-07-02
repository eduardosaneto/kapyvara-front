// import { useState } from 'react';
import styled from "styled-components";
import axios from "axios";
// import { FaPlus } from "react-icons/fa";
import Item from './Item';

export default function Products({ catalog }){

    return (
        <List>
            {catalog.map(c => (
                <Item 
                    key={c.id}
                    name={c.name}
                    image={c.image}
                    price={c.price}
                />
            ))}
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
`;

