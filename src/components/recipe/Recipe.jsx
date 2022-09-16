import { useEffect, useState } from 'react'
import style from './Recipe.module.css'

const Recipe = (props) => {

    const [recipe, setRecipe] = useState([])

    useEffect(() => {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`)
            .then(res => res.json())
            .then(data => setRecipe(data.drinks[0]))

    }, [props.id])

    return (
        <div className={style.recipeContainer}>

            <div className={style.imgRecipeDiv}>
                <img className={style.imageRecipe} src={recipe.strDrinkThumb} alt="" />
            </div>

            <div className={style.divIngerdients}>
                <h2 className={style.heading}>{recipe.strDrink}</h2>

                <article className={style.articleRecipe}>
                    <p>{recipe.strMeasure1}</p>
                    <p>{recipe.strIngredient1}</p>
                    <p>{recipe.strMeasure2}</p>
                    <p>{recipe.strIngredient2}</p>
                    <p>{recipe.strMeasure3}</p>
                    <p>{recipe.strIngredient3}</p>
                    <p>{recipe.strMeasure4}</p>
                    <p>{recipe.strIngredient4}</p>
                </article>
                <p>{recipe.strInstructionsDE}</p>
            </div>
        </div>
    )

}

export default Recipe