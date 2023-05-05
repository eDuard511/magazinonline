import React from "react";
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
import DropdownMenu from "./Dropdown";

const NavBar = () => {
return (
  <>
  <div className={styles.header}>
    <ul>
    <li>HOME</li>
    <li>DESPRE NOI</li>
    <li>CONTACTATI-NE</li>
    <li>0770 283 559</li>
    <li>LOGARE</li>
    <li>INREGISTREAZA-TE</li>
    <li>FAVORITE</li>
    <li>COMPARATIE</li>
    </ul>
    </div>
    <div className={styles.navBar}>
    <Link to = '/'>
    <img id ={styles.logo}src="https://sneaker-store.ro/image/cache/catalog/logo_2-814x250.png" alt="logo" />
    </Link>  
    <nav>
      <ul className={styles.navbarUl}>
        <li className={styles.navListItem}>
          <Link to = '/men'>Barbati</Link>
        </li>
        <li className={styles.navListItem}>
        <Link to = '/woman'>Dama</Link>
        </li>
        <li className={styles.navListItem}>
          Copii
        </li>
        <li className={styles.navListItem}>
          Top Branduri
        </li>
        <li className={styles.navListItem}>
          Produse noi
        </li>
        <li className={styles.navListItem}>
          Sale
        </li>
          <DropdownMenu />
      </ul>
    </nav>
    <div className={styles.search}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUAAAD///+6urphYWFFRUX29vb8/Pzq6urc3NzExMR3d3ezs7PS0tK3t7e9vb3j4+PKysqFhYVvb2+NjY2goKCVlZWoqKju7u4uLi7W1tahoaFaWlp+fn7k5OQ9PT0aGhpSUlIyMjImJiZnZ2dISEgPDw8/Pz8gICAXFxc3NzeSkpJVVVULCwtI+nDWAAAJ8ElEQVR4nO1dW1fySgzFD1oKVC5VCgoignf9/7/voCwVFXYuk7ngOvuFp7azmZkkk2SSRsMnHu9W09WsucFisbr2+qmgeFiuR5ed8mLQzrKTL+STouyPq+Uq9viccNM9H7Z3ae1B1h6O13exR6pBazzMMbddtHvd2AMW4X4kYfeB4nIZe+A8LC8HcnafU9mMPXwK08u2mt4WWd2KTQJgVDjS22Iwik1kP1o9xd47gLyX3kQ2SzN6WwzT2pGVzfL8jmIWm9YnKlfpcpBjGvO4vvDE7w3lbWx6jaehR35vOH2MS7D2zG+D/Cwiv4qwqo0wWEbit+oE4feGXhSCXTsFT6MdXuJc+5YwP3EZmGAzzA7cRRHUG3AenN8GWRWM36u1DcpFqJV6G36FfqAMQrAbjd8GV0/+CY5jEtxsxqVvgqdxCW6w9kswtBbcB58+jmhC9Ds8muIWJ/mymExc33Hui+CVdkTZpFOP583F9Otdi/W4LjOtaeuJomoGJxeX3cN+s2l1Xqhm1AtFhbOiHC/pmMv1rFb8dx7EjVjIDLuv7JevxuJIgLmR+k/2/Yu59AOLWmgMGvvhRIeJrNadV+ei1ZqbHornEn5neu+YyHM+4e8CEi8Cfo6RzluBQCts2G1wzVZb2dj9a2u+0DFzULG3R23jvR2xZY6RzugxP1eYRcQe+1yKJp9knnhtXdNcT1fb4FtT3iYsbgy+tQvmNP5z/xJPtnmwE0c8is4HYpbTIvcSy1ywbPLswe0r95yPDBw/chAs/d9x+wZHUTh+AoElxp1scM5eqK3o7MMZYwCZw/sfGe/3HL/kWMQOpg0jQOg9uYejjtV6f5YAwUajokdxoX03LWaCpGcxKCqFDS1mDE4SNgNRGm+kwg0WXaczPlTyjhTUQ2sih0GKPJXGoCxuC7OeDdIZrZhEagrzKf0OO6yo/1sxidQBLVxQ/R2kQBVPIiW/gufwUCaqeNMQCZUDHyQwKAeV0MlHLYoA4fSfoA5yQt8icTILpOq/45KgKLJOp/hdV75IYBA7py95F7GtX3xxwGgSkyh5F9Y+oj/LEoRpI1AYhJyJdqHuBo9LIGtwTknoPMgdECY4W9ZgEyn3SYHAK2bI9tpi34i3VA8O8CSy7RC4SLOoF3iJGAPTEFlBo9ur85AGzqtjWiJQkubWERghbiFDpksKRn08Orh5wJEi3jugfyb6fTLsP2WdWqFNGtR1sR9Q1rCOrc/oDVEOFd8BbWbWDEDjL7KcecMSjY9lUSJdYZfB4gB4iGKc9G/Q8wksUmKZMtQ1NNni3+hsEMdExipDvoIEJOkG10idTejnUcDp1P/wOYBOJHqZoT8okfojUJ+ROv8JKNTYNukH4EYkhSF62iUlwBTIrCENZyRKo1vdH0CRKPJ4gURp1NP9LtAhkZT36HyfRg2HBpGKRiVooeOXYV61G2BWNuXJQBGeIKPnAGYyLfGzd0AdRopW7ANiSCjEB/BowMwECsgsIXz76IBvkI5rBSQtiNMFCkNG9iPuAp3SCUcGYhizisoPIHcgERlDRlvg7AsEpPIdGHq+RC0BOub/DYYonYkQ+YhhQkXiEEOissT/DBOBp1WazNECHy7+hqRx0BYoef1I9CFhXP4Bm4aw2p7AownZpcgTQfhaVuDRRPzBb0Bua+KGBLrUnIyrDcfHKJEPzpZJhNa2AARJtY3mP8jgOUB76YTKsEdRjyCj52ANBjmhqqkgObwMMHgWkElD7iX0cBIR4DcghU8WrUMJUcmoCxTJJ7U2ynRgxFeD4A7FnsgY5wNQNbmvO9tCwPghnbSFVkAitjeKAU/o5FDkikzEMkX+YEboAQnTCHeB9gBtJE5iG9KmJwv/46cBtyHjZjJMFhdX8PIBmBPFSaZAokZ9LdwSaICsZAr4FyXQhwrmQbOMEpjmnUB/FHghgbeN0BsSkKbwJgHvFTBXPLpbGMp6ppyANxmjW9/wugvz9APTjONemcHOQP4Kg2nGz14JkIByhi0loL6Ie4S6hnKGnZaGb6NGtWtgaqlADMJbM1EnEU6hwN2Jb/lFjF/g6nECcwRf7o+YSItvH0rehCs0RDsI47Ulytki6n7c+6KA0bIcFV4OYRpp/AIuZSE82RFFFaJcSyAqtwnHRCyIKCEMvK7E93mIRhYR1ikxIrEOo+rtBVeKhPBTqDCq4F7ga2z3RCksxT9OTWJg442oTaOyQqhJDLoVqf42qk1D1bsJadpQjQuU7iOyim8waUPWML3SlcejdGIwxU+uJvVQ6O5VQSosMArFnijrAsFY6zv8FPL+Dm6fN5UXkK7E7J8iv5Gd6sYLo5y357iwpFOfhiKu0LCFV88Ubw9+QLNQOR2NPV4tlfZa1Mwip6m4t6RFebtTBUVaKW7Q9nONXdOKULFQWf+ja4egfbjV9aRXUOS18DC/nMjpGWA0Elzc7BMTU804VfSx01NkVH1/h2En+2ennt/yhcoVaZlRlH8mbqTnTJEt1AYGS3Vq0M1VvlD5/TnLpRu/J2EbQiuKT4LehKXD/aglu1kXBfFC5RionxgoTdXKshmveBZhkscv5D1x8GYq7WFpTpHZQusTg3OBR7U1tmg1/APihSo3Mq56Fd1KtnFX1a7a4QDEFOWW/ma5FvUcZOBMR/XASbljiBeqhuI7in7dnS1uHrZc765XN63mqNfxNHU7EFNktZk7jCxrD66uBhN1s2o5xAtVKm7iQzyLXCs8HYgpzoy1ln+IKd47d7cPDfFefPWgnP1CftLgts9NBnKK83Di3gbyI/FC5weLB0WdMpuDajgovNbrI1MbihZcD4wenilBcyyvjmoac9XFu6PSG7qaEC0H33RwKN251fEoDnX69sjfdhwaeId3oC+ZcOaH48ULN/LFhEsO/pn9Wi23hWYsfahuKU5d2yNHf/nxYku161hk9t7MksvOd6s3GBqIufPNu5HBROadn4EPQ4oGVfUcvdd5Od9TfINOsOPCJmP0aayUDvmwOpBFaTaLdtWe1z2pcC1qdLfOiqLpna1Vty5YXqus3XkmY8dWC9WS4Tta1XPn4uB0Toqyns94+b1GFM0ZbvFws6zO6l6/3++U5XDz0zs9687uV4zI1BdsFqonhjYwoRibBIbFQo3NgYABxdgUKLgv1NgMSDhTjE2AhuNCTaPrGIbbLCZUg/UwnCgm0+4IwmWhJtH8j4aeYiqVH0moF2pCjWQIaCm+xB44H7qFmlCtZxqqWUykfyMTCopHNYUNDcUj2oVbSPeiIgocG7JZnCTT+k8AEcXo1QJVECzU45KjX2DHFxMo2qkEMzJ1vAR593hTKdOtBJ1kNzlOIfOFBRHtOkI9+AtzkEdQHMmhl8L4AMfiWJXEHnSHv/bj5N/RWaIYj816+DmV7c7+e1f/AXKzj1AX8h5lAAAAAElFTkSuQmCC" alt="" />
    <Link to='/cart'>
    <img src="data:image/png;base64,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" alt="" />
    </Link>
    </div>
    </div>
    </>
)
}

export default NavBar;