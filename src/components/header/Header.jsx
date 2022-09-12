import style from './Header.module.css'
import { Link } from "react-router-dom"
import vector from '../../img/Vector.png'
const Header = () => {
    return (
        <>
            <header className={style.hero}>
                <nav className={style.logo}>
                    <h2>DRINKS & CHILL</h2>
                    <Link className={style.headerLink} to='/popupwindow' >MENU</Link>
                </nav>
                <div className={style.heading}>
                    <h1>Cocktails & Getränke! </h1>
                    <p>HERZLICH WILKOMMEN IN DER WELT DER COCKTAILS UND DER GETRÄNKE</p>
                </div>

                <div className={style.btn}>
                    <input placeholder='type something' type={style.text} />
                    <button>Search</button>
                </div>

                <section className={style.arrows}>
                    <img src={vector} alt="" />
                    <img src={vector} alt="" />
                    <img src={vector} alt="" />

                </section>
            </header>
        </>
    )
}

export default Header