import styles from "./Header.module.css"

import logo from "../../assets/logo.png"

import search from "../../assets/icons/search.png"
import heart from "../../assets/icons/heart.png"
import cart from "../../assets/icons/cart.png"
import profile from "../../assets/icons/profile.png"


export default function Header(){


    return (
        <header className={styles.container}>


            <img src={logo} alt="TiendaRopa" className={styles.logo}/>


            <nav>
                <ul>
                    <li>Catálogo</li>
                    <li>Novedades</li>
                    <li>Tendencias</li>
                    <li>Ofertas</li>
                    <li>Sucursales</li>
                </ul>
            </nav>

            <div className={styles.userActions}>
                <button><img src={search} alt="Buscar" /></button>
                <button><img src={heart} alt="Favoritos" /></button>
                <button><img src={cart} alt="Carrito de compras" /></button>
                <button><img src={profile} alt="Perfil" /></button>
            </div>

        </header>
    )

}