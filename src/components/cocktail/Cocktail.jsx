import style from './Cocktail.module.css'

const Cocktail = (props) => {
return(
    
    <>                                                        
    <div className={style.cocktailContainer}>
        <img src={props.cocktail_Img} className={style.image} height={240}></img>
        <h3 className={style.cocktailName}>{props.cocktail_Name}</h3>
    </div>

    </>
    )
    

}

export default Cocktail