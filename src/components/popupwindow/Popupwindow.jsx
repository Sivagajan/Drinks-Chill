import { Link } from "react-router-dom"
import style from './Popupwindow.module.css'
const Popupwindow = () => {
    return (
        <>
            <div className={style.backgroundPopup}>
                <div className={style.headerPopup}>

                    <h2 className={style.h2}>DRINKS & CHILL</h2>

                    <Link className={style.closingX} to="/">X</Link>
                </div>
                <div className={style.listHeader}>

                    <Link className={style.popupLink} to="/">Home</Link>
                    <Link className={style.popupLink} to="/addCocktails">Add Cocktail</Link>
                    <Link className={style.popupLink} to="/about">About</Link>
                    <Link className={style.popupLink} to="/contact">Contact</Link>

                </div>
            </div>
        </>
    )
}
export default Popupwindow