import React from "react";
import truck from '../images/truck.png';
import styles from '../styles/addedRecent.module.css'
import { useContext } from "react";
import { globalContext } from "../context/context";

const AddedRecent = () => {
    const {items,addToCart,cartItems} = useContext(globalContext);
    const newShoes = items.filter((item) => {
        return item.addedNew === "yes" 
      });

    return ( 
    <div className={styles.addedContainer}>
    <div className={styles.added}>
        <img src={truck} alt="truck"/>
        <span>TOATE COMENZILE DE PESTE 499 LEI SUNT LIVRATE CU TRANSPORT GRATUIT</span>
    </div>
    <h1> Newly added Items </h1>
    <div className={styles.newItems}>
        {newShoes.map((e,i) => {
            return (
                <div className={styles.shoeProduct} key={i}>
                        <img src={e.image} alt="imagine" />
                        <p id={styles.shoeName}>{e.name}</p>
                        <span id={styles.shoePrice}>{e.price} RON</span>
                        <button id={styles.addItem} onClick={() => addToCart(e.id)}>{e.buy} {cartItems[e.id] > 0 && <>({cartItems[e.id]})</>}</button>
                    </div>
            )
        })}
    </div>
    </div>
    )
}

export default AddedRecent