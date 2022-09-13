import style from './Cocktail.module.css'

const Cocktail = (props) => {
return(
    
    <>     
        {props.map((e, i) => <div className={`       /* <--- Änderung */
			style${Math.floor((i % 6) + 1)}
			${i % 2 == 0 ? 'left' : 'right'}
			`}
            key={e.id}
        >
            {e.first_name}
        </div>)}
                                                                     
    <div className={style.cocktailContainer}>
        <img src={props.cocktail_Img} className={style.image} height={240}></img>
        <h3 className={style.cocktailName}>{props.cocktail_Name}</h3>
    </div>

    </>
    )
    

}

export default Cocktail