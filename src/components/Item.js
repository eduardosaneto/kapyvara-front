import { useState, useContext } from 'react';
import styled from "styled-components";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

import CartContext from '../Contexts/CartContext';

export default function Item({ image, name, price }){

    const [isSelected, setIsSelected] = useState(false);
    const [count, setCount] = useState(1);
    const { cart, setCart } = useContext(CartContext); 

    console.log(cart);
    // console.log(count);

    function unselectItem() {
        setIsSelected(false);
        setCount(1);
    }

    function chosenOption() {
        if (!isSelected && (count - 1) === 0) {
            setIsSelected(true);
            addToOrder();
        } else if (isSelected && (count - 1) === 0) {
            removefromOrder();
        }    
    };

    function optionQuantity(e, operator) {
        let control = false;
        e.stopPropagation();

        if (operator === "-") {
            chosenOption();
            count <= 1 ? unselectItem() : setCount(count - 1);
        } else {
            setCount(count + 1);
            control = true;
        }
        updatedOrder(control);
    };

    function updatedOrder(control){
        const updatedChosenOption = cart.map(item => {
            if (item.name === name) {
                return {
                    image: image,
                    name: name,
                    price: price,
                    quantity: control ? count + 1 : count -1
                };
            } else {
                return item;
            } 
        });
        setCart(updatedChosenOption);  
    };

    function addToOrder(){
        const selectedOption = {
            image: image,
            name: name,
            price: price,
            quantity: count
        };
        const updatedOrder = [...cart, selectedOption];
        setCart(updatedOrder);       
    };

    function removefromOrder() {
        const newUpdatedOrder = cart.filter(item => item.name !== name);
        setCart(newUpdatedOrder);
    };

    return (
            <Li>
                <div>
                    <img src={image} alt={name}/>
                </div>
                <ProductInfos>
                    <div>
                        <span>
                            <h1>{name}</h1>
                        </span>
                        <h2>R${price},00</h2>
                    </div>
                    <AddBox selected={isSelected}>
                        {!isSelected ? 
                        <>
                            <div><Plus onClick={chosenOption} /></div>
                            <h3>Add to Wallet</h3>
                        </>
                        :
                        <>
                            <p onClick={(e) => optionQuantity(e, "+")}>+</p>
                            <span><p>{count}</p></span>
                            <p onClick={(e) => optionQuantity(e, "-")}>-</p>
                        </>
                        }
                    </AddBox>
                </ProductInfos>                
            </Li>
    );
}

const Li = styled.li`
    width: calc(50% - 5px);
    height: 210px;
    margin-bottom: 8px; 
    border: 1px solid #316a37;       
    border-radius: 5px;
    > div:first-child {
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
    padding: 2px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div:first-child {
        width: calc(100% - 40px);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    span {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 3px;
        margin-bottom: 5px;
    }
    h1 {
        font-size: 14px;
        line-height: 15px;
    }
    h2 {
        font-size: 18px;
        font-weight: bold;
    }
`;

const AddBox = styled.div`
    width: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.selected ? "center" : "center"};
    align-items: center;
    div {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 4px;
        background-color: #316a37;
    }
    h3 {
        font-size: 10px;
        color: #1B3D1F;
    }
    span {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2px 0;
        border: 1px solid #316a37;
        border-radius: 5px;
    }
    > p {
        height: 18px;
        font-size: 18px;
        display: flex;
        align-items: center;
        font-size: 18px;
    }
    > p:last-child {
        padding-bottom: 10px;
    }
    span > p {
        color: #1B3D1F;
    }
`;

const Plus = styled(FaPlus)`
    font-size: 20px;
    color: #fff;
`;


