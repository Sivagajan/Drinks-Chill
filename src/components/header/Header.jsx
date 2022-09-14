import style from './Header.module.css'
import { Link } from "react-router-dom"
import vector from '../../img/Vector.png'
import { useState } from 'react'


const Header = () => {

    const [cocktail, setCocktail] = useState('')
    console.log(cocktail)

    return (

        <div>
            <header className={style.hero}>
                <nav className={style.logo}>
                    <h2>DRINKS & CHILL</h2>
                    <Link className={style.headerLink} to='/popupwindow' >MENU</Link>
                </nav>
                <div className={style.heading}>
                    <Link to='/'><h1>Cocktails & Getränke!</h1></Link>
                    <p>HERZLICH WILKOMMEN IN DER WELT DER COCKTAILS UND DER GETRÄNKE</p>
                </div>

                <div className={style.btn}>
                    <input onChange={(e) => setCocktail(e.target.value)} placeholder='type something' type={style.text} />

                    <Link to={`/cocktailList/${cocktail}`}> <button className='glow-on-hover'>Search</button></Link>

                </div>

                <section className={style.arrows}>
                    <img src={vector} alt="" />
                    <img src={vector} alt="" />
                    <img src={vector} alt="" />

                </section>

            </header>
        </div>
    )
}

export default Header