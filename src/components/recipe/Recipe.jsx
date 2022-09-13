import { useEffect } from 'react'
import style from './Drinks.module.css'

const Drinks = (props) => {


    const [recipe, setRecipe] = useState({})

    useEffect(() => {

        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222')
            .then (res => res.json())
            .then (data => setRecipe(data))
    })



    return (
        <>
            <p className={style.textUnder}>{recipe.strDrink}</p>
            <h2 className={style.heading}>{recipe.strCategory}</h2>
        </>
    )


}

export default Drinks