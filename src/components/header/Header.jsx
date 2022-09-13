import style from './Header.module.css'
import { Link } from "react-router-dom"
import vector from '../../img/Vector.png'
import { useState } from 'react'
import AnimationPopup from '../animationPopup/AnimationPopup'

const Header = () => {
    const [cocktail, setCocktail] = useState('')
    const [inputPopup, setInputPopup] = useState(false)
    console.log(cocktail)
    console.log(inputPopup)
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
                    <input onChange={(e) => setCocktail(e.target.value)} placeholder='type something' type={style.text} />
                    <button onClick={() => setInputPopup(true)}>Search</button>
                </div>

                <section className={style.arrows}>
                    <img src={vector} alt="" />
                    <img src={vector} alt="" />
                    <img src={vector} alt="" />

                </section>
                <AnimationPopup name={cocktail} trigger={inputPopup} setTrigger={setInputPopup}></AnimationPopup>
            </header>
        </>
    )
}

export default Header