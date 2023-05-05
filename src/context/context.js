import { useState } from "react";
import React from "react";
import { createContext } from "react";
import data from "./data.json"

export const globalContext = createContext(null) ;
const Context = ({children}) => {
    const [items,setItems] = useState(data)

    // useEffect(() => {
    //     async function fetchAPI() {
    //       const res = await fetch("data.json");
    //       const posts = await res.json();
    //       setItems(posts);
    //       console.log(posts)
    //     }
    //     fetchAPI();
    //   }, []);

    const getDefaultCart = () => {
        let cart = {};
        for (let i=1 ; i < items.length + 1; i++) {
            cart[i] = 0
        }
        return cart;
    }

    const [cartItems , setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        console.log(cartItems)
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount , itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }
    

    const contextValue = {items,setItems,cartItems,setCartItems,addToCart,removeFromCart,updateCartItemCount}
    return (
        <globalContext.Provider value={contextValue}>
            {children}
        </globalContext.Provider>
    )
}

export default Context ; 