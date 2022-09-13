import { useEffect, useState } from 'react'
import style from './Recipe.module.css'

const Recipe = (props) => {


    const [recipe, setRecipe] = useState([])

    useEffect(() => {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`)
            .then (res => res.json())
            .then (data => setRecipe(data.drinks[0]))
                console.log(recipe)
    },[])



    return (
        <>
            <img src={recipe.strDrinkThumb} alt="" />
            <p className={style.textUnder}>{recipe.strDrink}</p>
            <h2 className={style.heading}>{recipe.strCategory}</h2>
            <p>{recipe.strIngredient1}</p>
            <p>{recipe.strMeasure1}</p>
            <p>{recipe.strIngredient2}</p>
            <p>{recipe.strMeasure2}</p>
            <p>{recipe.strIngredient3}</p>
            <p>{recipe.strMeasure3}</p>
            <p>{recipe.strIngredient4}</p>
            <p>{recipe.strMeasure4}</p>

            <p>{recipe.strInstructionsDE}</p>

        </>
    )


}

export default Recipe