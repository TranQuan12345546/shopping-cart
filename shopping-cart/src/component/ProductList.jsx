import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";



function ProductList() {
    const [filterCartItem, setFilterCartItem] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/cartItems")
            .then((response) => response.json())
            .then((json) => {
                setFilterCartItem(json);
            });
    }, [])


    return (
        <>  
            {filterCartItem.map((cartItem, index) => (
            <>
                <ProductItem cartItem = {cartItem} index = {index}/>
            </>
            ) )}       
        </>
    )
}

export default ProductList