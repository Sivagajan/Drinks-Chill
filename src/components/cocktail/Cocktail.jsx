import { Link } from 'react-router-dom'
import style from './Cocktail.module.css'
import { useState } from 'react';
import AnimationPopup from '../animationPopup/AnimationPopup';


const Cocktail = (props) => {
    const [popupBtn, setpopupBtn] = useState(false)

    return (
        <>
            <AnimationPopup trigger={popupBtn} setTrigger={setpopupBtn} id={props.id} key={props.key}></AnimationPopup>
            <img onClick={() => setpopupBtn(true)} src={props.cocktail_Img} className={style.image} height={240} alt=''></img>
            <p className={style.cocktailName}>{props.cocktailName}</p>
        </>
    );
}
export default Cocktail