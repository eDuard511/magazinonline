import React, { useState } from 'react';
import styles from '../styles/dropdown.module.css'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(true);
  }

  const stopDropdown = () => {
    setIsOpen(false);
  }
  
  return (
    <div className={styles.dropdown} onMouseLeave={stopDropdown}>
      <button className={styles.dropdownToggle} onMouseEnter={toggleDropdown}>
        Magazinele Noastre
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}  >
          <li className={styles.dropdownMenuLi}>Univeristate</li>
          <li className={styles.dropdownMenuLi}>Veranda Mall</li>
          <li className={styles.dropdownMenuLi}>Afi Cotroceni</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;