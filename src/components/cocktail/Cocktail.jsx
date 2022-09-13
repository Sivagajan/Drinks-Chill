import { Link } from 'react-router-dom'
import style from './Cocktail.module.css'

const Cocktail = (props) => {
return(
    
    <>                                                        
        
        <img src={props.cocktail_Img} className={style.image} height={240}></img>
        <p className={style.cocktailName}>{props.cocktail_Name}</p>

    </>
    )
    

}

export default Cocktail