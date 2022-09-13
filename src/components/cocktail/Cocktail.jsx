import { Link } from 'react-router-dom'
import style from './Cocktail.module.css'
import { useState } from 'react';
import AnimationPopup from '../animationPopup/AnimationPopup';


const Cocktail = (props) => {
<<<<<<< HEAD
return(
    
    <>                                                        
        
        <img src={props.cocktail_Img} className={style.image} height={240}></img>
        <p className={style.cocktailName}>{props.cocktail_Name}</p>
=======
    const [popupBtn, setpopupBtn] = useState(false)
>>>>>>> main

    return (
        <>
            <AnimationPopup trigger={popupBtn} setTrigger={setpopupBtn}></AnimationPopup>
            <img onClick={() => setpopupBtn(true)} src={props.cocktail_Img} className={style.image} height={240}></img>
            <p className={style.cocktailName}>{props.cocktail_Name}</p>
        </>
    );

}
export default Cocktail