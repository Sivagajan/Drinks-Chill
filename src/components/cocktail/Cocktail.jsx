import style from './Cocktail.module.css'

const Cocktail = (props) => {
return(
    <div>
        <img src={props.cocktail_Img} className={style.image}></img>
        <p className={style.cocktailName}>{props.cocktail_Name}</p>
    </div>
    )
    

}

export default Cocktail