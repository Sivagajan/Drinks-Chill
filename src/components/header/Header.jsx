import style from './Header.module.css'
import { Link } from "react-router-dom"
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256" class="caret_double_icon"><rect width="256" height="256" fill="none"></rect><polyline points="208 128 128 208 48 128" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="208 48 128 128 48 48" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
                </section>
            </header>
        </>
    )
}

export default Header