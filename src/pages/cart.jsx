import NavBar from '../components/Navbar';
import { globalContext } from '../context/context';
import styles from '../styles/cart.module.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function Cart() {
  const navigate = useNavigate();
  const {cartItems,items,addToCart,removeFromCart,updateCartItemCount} = useContext(globalContext);
  const getTotalCartAmount = () => {
    let totalAmount = 0 ;
    for(const item in cartItems) {
        if(cartItems[item] > 0) {
            let itemInfo = items.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
        }
    }

    return totalAmount ;
    
}

const result = getTotalCartAmount();

  return (
    <div className={styles.cart}>
      <NavBar />
      <div>
      <h1> Your Cart Items</h1>
      </div>
      <div className={styles.cartContainer}>
      {items.map((product,index) => {
        console.log(product.id)
        if (cartItems[product.id] !== 0) {
          return (
          <div className={styles.cartItem}>
          <img src={product.image} alt="" />
          <p id={styles.name}>{product.name}</p>
          <p id={styles.price}>{product.price} RON</p>
          <button className={styles.remove} onClick={() => {removeFromCart(product.id)}}>-</button>
          <input value = {cartItems[product.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}/>
          <button className={styles.add} onClick={() => {addToCart(product.id)}}>+</button>
          </div>
          )
        }
        return null
      })}
      {result > 0 ? <div className={styles.checkout}>
      <p> Subtotal : {result} RON</p>
      <button onClick={() => {navigate('/')}}> Continue Shopping </button>
      <button> Checkout </button>
      </div> : <h1> Your Cart is Empty </h1>}
      </div>
    </div>
  );
}

export default Cart;