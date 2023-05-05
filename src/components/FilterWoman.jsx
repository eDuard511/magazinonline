import { useContext } from "react";
import { globalContext } from "../context/context";
import React,{useState} from "react";
import styles from '../styles/filter.module.css'

function FilterWoman() {
   
  
    const {items,addToCart,cartItems} = useContext(globalContext);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
  
    function handleColorChange(event) {
      setSelectedColor(event.target.value);
    }

    function handleBrandChange(event) {
      setSelectedBrand(event.target.value);
    }

    function handlePriceChange(event) {
      setSelectedPrice(event.target.value);
    }
  
  
    const filteredProducts = items
    .filter(item =>!selectedColor || item.color === selectedColor)
    .filter(item =>!selectedBrand || item.brand === selectedBrand)
    .filter(item => {
      if (selectedPrice === '') {
        return true; 
      } else if (selectedPrice === '900') {
        return item.price >= 900 && item.price < 1000;
      } else if (selectedPrice === '1000') {
        return item.price >= 1000 && item.price < 1100;
      } else if (selectedPrice === '1100') {
        return item.price >= 1100 && item.price < 1200;
      } else {
        return false; 
      }
    });

    const filteredShoes = filteredProducts.filter(shoe => {
      return shoe.category === 'woman' 
    });
    return (
      <div className={styles.mainContainer}>
        <div className={styles.filter}>
        <label htmlFor="color-filter">Filter by color:</label>
        <select id={styles.colorFilter} value={selectedColor} onChange={handleColorChange}>
          <option value="">All colors</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="pink">Pink</option>
        </select>
        <label htmlFor="color-filter">Filter by brand:</label>
        <select id={styles.colorFilter} value={selectedBrand} onChange={handleBrandChange}>
          <option value="">All brands</option>
          <option value="nike">Nike</option>
          <option value="jordan">Jordan</option>
          <option value="armani">Armani</option>
        </select>
        <label htmlFor="color-filter">Filter by Price:</label>
      <select id={styles.colorFilter} value={selectedPrice} onChange={handlePriceChange}>
        <option value="">All Prices</option>
        <option value="900">900-1000</option>
        <option value="1000">1000-1100</option>
        <option value="1100">1100-1200</option>
      </select>
        </div>
        <ul>
            <div className={styles.container}>
        {filteredShoes.map((e,i) => {
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
        </ul>
      </div>
    );

}
  
export default FilterWoman;